import { Prisma } from "@prisma/client";
import { Res } from "../util";
import { db } from "./db.server";

const basePost = Prisma.validator<Prisma.PostArgs>()({
  select: {
    slug: true,
    content: true,
  },
});
export type Post = Prisma.PostGetPayload<typeof basePost>;

export async function create(data: Post): Promise<Res<Post>> {
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
