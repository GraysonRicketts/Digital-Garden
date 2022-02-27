import React from "react";
import Typography from "~/components/Typography";
import gitHubImg from "~/template/icons/icons8-github.svg";
import liImg from "~/template/icons/icons8-linkedin.svg";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 mb-1">
      <span className="flex items-center">
        <a
          href="https://github.com/GraysonRicketts"
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <img src={gitHubImg} alt="GitHub" className="dark:invert"/>
        </a>
        <a
          href="https://linkedin.com/in/graysonricketts"
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <img src={liImg} alt="LinkedIn" className="dark:invert"/>
        </a>{" "}
        <Typography className="ml-2 text-neutral-600	dark:text-neutral-200">Grayson Ricketts &#169; {year}</Typography>
      </span>
    </footer>
  );
};
