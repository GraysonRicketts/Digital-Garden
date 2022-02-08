import React from "react";
import { LoaderFunction, useLoaderData, useTransition } from "remix";
import invariant from "tiny-invariant";
import { Post } from "../../db/post";
import { getPost } from "../../server/post";
import { Res } from "../../util";
import { marked } from "marked";

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

const PostSlug: React.FC = () => {
  const post = useLoaderData<Res<Post>>();
  const { data, error } = post;
  const transition = useTransition();

  if (transition.state === "loading") {
    return <p>Loading...</p>
  } else if (error || !data) {
    throw new Error(error?.message || 'No data');
  } 
  
  const htmlContent = marked(data.content);

  return (
    <div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default PostSlug;
