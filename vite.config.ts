import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
// import dotenv from "dotenv";

// dotenv.config(); // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), viteCommonjs()],
  define: {
    global: {},
    stream: {},
    process: {},
  },
  // build: {
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //   },
  // },
});
