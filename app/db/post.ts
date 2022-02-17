import { Prisma } from "@prisma/client";
import invariant from "tiny-invariant";
import { Res } from "../util";

export type Post = {
  title: string;
  tags: {
      name: string;
  }[];
  slug: string;
  content: string;
  isRecommended: boolean;
}

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

  return {data: {} as Post};
}

export interface FindOptions {
  isRecommended?: boolean;
}
interface FindOneOptions extends FindOptions {
  id?: string;
  slug?: string;
}
export function findOne(opts: FindOneOptions): Promise<Res<Post | null>> {
  const { id, slug } = opts;
  invariant(!id || !slug, "Expected either slug or id");

  return Promise.resolve({data: {} as Post});
}

export function findMany(opts?: FindOptions): Promise<Post[] | null> {
  const constructedWhere: Prisma.PostWhereInput = {};
  if (opts?.isRecommended) {
    constructedWhere.isRecommended = opts.isRecommended;
  }
  return Promise.resolve([])
}
