import React from "react";
import A from "~/components/A";
import Typography, { Type } from "~/components/Typography";

const Index: React.FC = () => {
  return (
    <article>
      <Typography displayType={Type.H1} htmlType={Type.H1}>🏡 Grayson&apos;s digital garden</Typography>
      <Typography>
        Hi, I&apos;m Grayson. Welcome to my corner of the internet. Here, I
        create and share things related to software engineering, climbing, and
        life.
      </Typography>
      <Typography>
        Here, you will find a lot about software engineering: advice on leading
        teams, technical topics, anecdotes. You can also find some more general
        life and climbing things. Or, you can check out some of what I&apos;m
        reading as well.
      </Typography>
      <Typography>
        I got the idea for my Digital Garden after
        <A
          href="https://joelhooks.com/digital-garden"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;reading Joel Hooks&apos;s post
        </A>
        . I recommend reading
        <A
          href="https://maggieappleton.com/garden-history"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;the fantastic post that originated the Digital Garden movement.
        </A>
        I&apos;m looking forward to how this site can grow and hope you enjoy
        what you find.
      </Typography>

      <Typography>
        If you&apos;d like to reach out to me, feel free to shoot me a message
        over on
        <A
          href="https://linkedin.com/in/graysonricketts"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;LinkedIn.
        </A>
      </Typography>

      <Typography>Hope you have a wonderful day! 👋 🙇</Typography>
    </article>
  );
};

export default Index;
