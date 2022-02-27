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
import styles from "./tailwind.css";
import rootStyles from "./root.css";
import { Header } from "./template/Header";
import { Footer } from "./template/Footer";

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
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="h-full flex flex-col mx-4">
          <Header />
          <main className="md:container mx-auto pt-10 grow flex flex-col">
            <div className="grow">
              {children}
              {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
            </div>
            <Footer />
          </main>
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </div>
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
