import React from "react";
import { ActionFunction, Form, useActionData, useTransition } from "remix";
import invariant from "tiny-invariant";
import { addPost } from "~/server/post";
import { Post } from "../../db/post";
import { AppError, CodedError, Res } from "../../util";


export const action: ActionFunction = async ({request}): Promise<CodedError | null> => {
  const formData = await request.formData();
  
  const slug = formData.get('slug');
  const content = formData.get('content');
  const password = formData.get('password');

  invariant(typeof slug === 'string')
  invariant(typeof content === 'string')
  invariant(typeof password === 'string')

  const { error } = await addPost({ slug, content}, password);
  return error ? error : null;
};

export default function CreatePost() {
  const error = useActionData<CodedError>()
  const transition = useTransition();
  
  return (
    <Form method="post">
      {error && <p>{error.code}: {error.message}</p>}
      <fieldset
        disabled={transition.state === "submitting"}
      >
      <p>
        <label htmlFor="slug">
          Slug <br/> <input type="text" name="slug" required/>
        </label>
      </p>
      <p>
        <label htmlFor="content">
          Content <br /> <textarea name="content" required />
        </label>
      </p>
      <p>
        <label htmlFor="password">
          Password <br /> <input type="password" name="password" required />
        </label>
      </p>
      </fieldset>

      <button type="submit">{transition.state === "submitting" ? "Creating..." : "Create"}</button>
    </Form>
  );
}
