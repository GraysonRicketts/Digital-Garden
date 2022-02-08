import React from "react";
import gitHubImg from "~/template/GitHub-Mark-32px.png";
import liImg from "~/template/LI-In-Bug.png";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="grey container">
      <span>
        <a href="https://github.com/GraysonRicketts" target="_blank" rel="noreferrer">
          <img src={gitHubImg} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/graysonricketts" target="_blank" rel="noreferrer">
          <img src={liImg} alt="LinkedIn" />
        </a>{" "}
        Grayson Ricketts &#169; {year}
      </span>
    </footer>
  );
};
