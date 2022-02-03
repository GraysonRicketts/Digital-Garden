import React from "react";
import { Link, LoaderFunction, Outlet, useLoaderData, useTransition } from "remix";
import { Post } from "../../db/post";
import { getManyPosts } from "../../server/post";

export const loader: LoaderFunction  = async() => {
  return getManyPosts();
}

export default function Posts() {
  const data = useLoaderData<Post[]>();
  const transition = useTransition();
  const isLoadingData = transition.state === "loading";
  return (
    <div>
      <div>
        Posts
        <ul>
          {isLoadingData ? (
            <p>Loading...</p>
          ) : (
            data.map((d) => <Link to={d.slug} key={d.slug}>{d.slug}</Link>)
          )}
        </ul>
      </div>
      Blog <Outlet />
    </div>
  );
}
