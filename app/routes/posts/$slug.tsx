import React from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { Post } from '../../db/post';
import { getPost } from '../../server/post';
import { Res } from '../../util';

export const loader: LoaderFunction  = ({params}) => {
    invariant(params.slug, "expected params.slug");
    return getPost(params.slug);
}

const PostSlug: React.FC = () => {
    const post = useLoaderData<Res<Post>>();

  return <div><p>{post.data?.content}</p></div>;
};

export default PostSlug;
