import React from "react";
import { LoaderFunction, useLoaderData, useTransition } from "remix";
import invariant from "tiny-invariant";
import { Post } from "../../db/post";
import { getPost } from "../../server/post";
import { Res } from "../../util";
import {marked} from 'marked';

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

const PostSlug: React.FC = () => {
  const post = useLoaderData<Res<Post>>();
  const { data, error } = post;
  const transition = useTransition();


  if (transition.state === "loading") {
  } else if (data) {
  const htmlContent = marked(data.content);

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  } else if (error) {
    return <p>Something went wrong, we're looking into it</p>;
  }
  throw new Error("Unexpected. Should either get error or data.");
};

export default PostSlug;
