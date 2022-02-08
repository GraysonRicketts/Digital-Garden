import React from "react";
import { Link, LoaderFunction, useLoaderData, useTransition } from "remix";
import { Post } from "../db/post";
import { getManyPosts } from "../server/post";

export const loader: LoaderFunction = () => {
  return getManyPosts({ isRecommended: true });
};

const Index: React.FC = () => {
  const posts = useLoaderData<Post[]>();
  const transition = useTransition();
  const isLoadingData = transition.state === "loading";

  return (
    <div>
      <h1>🏡 Grayson&apos;s digital garden</h1>

      <p>Hi, I&apos;m Grayson. This is where I write about topics that interest me.</p>

      <p>
        {" "}
        If you&apos;re unfamiliar with what a digital garden is,&nbsp;
        <a
          href="https://maggieappleton.com/garden-history"
          target="_blank"
          rel="noreferrer"
        >
          check out the original essay
        </a>{" "}
        on the concept from Maggie Appleton.{" "}
        <a
          href="https://joelhooks.com/digital-garden"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          This is also a good read
        </a>{" "}
        by Joel Hooks.
      </p>

      <div>
        <h5>My personal recommendations</h5>
        {isLoadingData ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {posts &&
              posts.map((p) => (
                <li key={p.slug}>
                  <Link to={`/posts/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Index;
