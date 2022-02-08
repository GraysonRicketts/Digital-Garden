import React from "react";
import {
  Link,
  LoaderFunction,
  useLoaderData,
  useTransition,
} from "remix";
import { Post } from "../../db/post";
import { getManyPosts } from "../../server/post";

export const loader: LoaderFunction = async () => {
  return getManyPosts();
};

export const Posts: React.FC = () => {
  const data = useLoaderData<Post[]>();
  const transition = useTransition();
  const isLoadingData = transition.state === "loading";
  return (
    <div>
      <div>
        <h3>Writing</h3>
        <ul>
          {isLoadingData ? (
            <p>Loading...</p>
          ) : (
            data.map((d) => (
              <li key={d.slug}>
                <Link to={d.slug}>{d.title}</Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Posts;