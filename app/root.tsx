import React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix/client";
import type { MetaFunction, ErrorBoundaryComponent } from "remix/server";
import styles from "./tailwind.css";
import rootStyles from "./root.css";
import { Header } from "./template/Header";
import { Footer } from "./template/Footer";
import classNames from "classnames";

export const links = () => {
  return [
    { rel: "stylesheet", href: rootStyles },
    { rel: "stylesheet", href: styles },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Grayson's Digital Garden" };
};

const Document: React.FC = ({ children }) => {
  const appClasses = classNames(
    "h-screen",
    "bg-white",
    'text-slate-900',

  );

  return (
    <html lang="en" className={appClasses}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full flex flex-col px-4 dark:bg-slate-900
    dark:text-slate-300">
          <Header />
          <main className="mx-auto pt-10 grow flex flex-col md:container md:max-w-3xl">
            <div className="grow">
              {children}
              {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
            </div>
            <Footer />
          </main>
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

const App: React.FC = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};

const ErrorBoundary: ErrorBoundaryComponent = ({ error }: { error: Error }) => {
  return (
    <Document>
      <h1>Something went wrong</h1>
      <p>We&apos;re looking into it</p>

      {process.env.NODE_ENV === "development" ? (
        <div>
          <pre>{error.stack}</pre>
        </div>
      ) : null}
    </Document>
  );
};

export default App;
export { ErrorBoundary };
