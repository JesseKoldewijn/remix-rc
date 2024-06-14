import { appConfig } from "./app";

export const themeConfig = {
  themes: ["light", "dark"],
  defaultTheme: "dark",
  themeCookie: `${appConfig.appName}-theme`,
} as const;
