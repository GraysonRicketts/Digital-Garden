import React from "react";
import {
  ErrorBoundaryComponent,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import skeletonStyles from "~/styles/skeleton.css";
import normalizeStyles from "~/styles/normalize.css";
import rootStyles from "~/styles/root.css";
import { Header } from "./template/Header";
import { Footer } from "./template/Footer";

export const links = () => {
  return [
    { rel: "stylesheet", href: normalizeStyles },
    { rel: "stylesheet", href: skeletonStyles },
    { rel: "stylesheet", href: rootStyles },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Grayson's Digital Garden" };
};

const Document: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className="container">
          {children}
          {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        </main>
        <Footer />
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

      {process.env.NODE_ENV === "development" ? <div>
        <pre>{error.stack}</pre>
      </div> : null}
    </Document>
  );
};

export default App;
export { ErrorBoundary };
