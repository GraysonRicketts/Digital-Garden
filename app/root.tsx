import {
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

export default function App() {
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
          <Outlet />
        </main>
          <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
