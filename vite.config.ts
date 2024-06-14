import { vitePlugin as remix } from "@remix-run/dev";
import { resolve } from "path";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

const __dirname = new URL(".", import.meta.url).pathname;

// This is the configuration for the React compiler
const ReactCompilerConfig = {
  /* ... */
};

export default defineConfig({
  plugins: [
    remix({
      appDirectory: "src",
    }),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"], // if you use TypeScript
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
});

// disables annoying Babel warning spam in development
console.log = (...args) => {
  if (
    String(args).includes("[BABEL] Note: The code generator has deoptimised")
  ) {
    return;
  }

  console.debug(...args);
};
