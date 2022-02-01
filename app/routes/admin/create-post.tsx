import React, { useEffect, useRef } from "react";
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
  const isAdding = transition.state === 'submitting' && transition.submission.formData.get('_action') === 'create';
  
  const formRef = useRef<HTMLFormElement>(null);
  const slugRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isAdding) {
      formRef.current?.reset();
      slugRef.current?.focus();
    }
  })
  
  return (
    <Form ref={formRef} method="post">
      {error && <p>{error.code}: {error.message}</p>}
      <fieldset
        disabled={transition.state === "submitting"}
      >
      <p>
        <label htmlFor="slug">
          Slug <br/> <input type="text" name="slug" required ref={slugRef}/>
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

      <button type="submit" disabled={isAdding} name="_action" value="create">{transition.state === "submitting" ? "Creating..." : "Create"}</button>
    </Form>
  );
}
