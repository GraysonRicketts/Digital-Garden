import { create, Post } from "~/db/post";
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
