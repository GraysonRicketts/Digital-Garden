import React from "react";
import gitHubImg from "~/template/icons/icons8-github.svg";
import liImg from "~/template/icons/icons8-linkedin.svg";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 mb-1">
      <span className="flex items-center text-neutral-600	">
        <a
          href="https://github.com/GraysonRicketts"
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <img src={gitHubImg} alt="GitHub" />
        </a>
        <a
          href="https://linkedin.com/in/graysonricketts"
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <img src={liImg} alt="LinkedIn" />
        </a>{" "}
        <p className="ml-2">Grayson Ricketts &#169; {year}</p>
      </span>
    </footer>
  );
};
