import cn from "classnames";
import React from "react";

const A: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  const propClassName = props.className;
  delete props.className;

  const className = cn(
    "text-sky-700",
    "visited:text-indigo-700",
    "hover:visited:text-indigo-900",
    "hover:text-sky-900",
    "hover:underline",
    'dark:text-sky-200',
    'dark:visited:text-indigo-200',
    'dark:hover:visited:text-indigo-400',
    'dark:hover:text-sky-400',
    propClassName
  );

  return (
    <a className={className} {...props}>
      {children}
    </a>
  );
};

export default A;
