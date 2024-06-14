import { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { StrictMode } from "react";

import PageLayout from "~/components/layout/page-layout";
import "~/styles/tailwind.css";

import { themeConfig } from "./config/theme";

export const links: LinksFunction = () => [];

export const loader = async (args: LoaderFunctionArgs) => {
  const cookieString = args.request.headers.get("Cookie");
  const cookieJar = cookieString?.split(";").reduce(
    (jar, cookie) => {
      const [name, value] = cookie.split("=");
      return { ...jar, [name.trim()]: value };
    },
    {} as Readonly<Record<string, string>>,
  );

  return {
    cookies: cookieJar,
  };
};

export default function App() {
  const { cookies } = useLoaderData<typeof loader>();
  const theme =
    (cookies && cookies[themeConfig.themeCookie]) || themeConfig.defaultTheme;

  return (
    <StrictMode>
      <html className={theme}>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="data:image/x-icon;base64,AA" />
          <Meta />
          <Links />
        </head>
        <body>
          <PageLayout>
            <Outlet />
          </PageLayout>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </StrictMode>
  );
}
