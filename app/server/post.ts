import { create, findMany, findOne, Post } from "~/db/post";
import { Res } from "~/util";

export async function addPost(
  post: Post,
  password: string
): Promise<Res<Post>> {
  if (password !== process.env.PASSWORD) {
    return {
      error: {
        code: "ap1",
        message: "Invalid authentication",
      }
    };
  }

  return create(post);
}

export async function getPost(slug: string) {
  return findOne({ slug });
}

export async function getManyPosts() {
  return findMany();
}
