import { Prisma } from "@prisma/client";
import invariant from "tiny-invariant";
import { Res } from "../util";
import { db } from "./db.server";

const basePost = Prisma.validator<Prisma.PostArgs>()({
  select: {
    slug: true,
    title: true,
    content: true,
    tags: {
      select: {
        name: true,
      },
    },
  },
});
export type Post = Prisma.PostGetPayload<typeof basePost>;

export interface CreatePost {
  title: string;
  tags: string[];
  slug: string;
  content: string;
}
export async function create(post: CreatePost): Promise<Res<Post>> {
  const data = {
    ...post,
    tags: {
      create: post.tags.map((t) => ({ name: t })),
    },
  };

  return db.post
    .create({ ...basePost, data })
    .then((res: Post) => {
      return { data: res };
    })
    .catch((e) => {
      return {
        error: {
          code: "cp1",
          message: "Failed to create post" + `:${e}`,
        },
      };
    });
}

interface FindOneOptions {
  id?: string;
  slug?: string;
}
export function findOne(opts: FindOneOptions): Promise<Res<Post | null>> {
  const { id, slug } = opts;
  invariant(!id || !slug, "Expected either slug or id");

  return db.post
    .findUnique({ ...basePost, where: { id, slug } })
    .then((res) => {
      return { data: res };
    })
    .catch((e) => {
      return { error: { code: "fp1", message: "Erroring finding post" } };
    });
}

export function findMany(): Promise<Post[] | null> {
  return db.post.findMany({ ...basePost });
}
