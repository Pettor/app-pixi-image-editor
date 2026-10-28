import path from "node:path";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { createBaseConfig, createPWAConfig, createReactConfig, mergeConfigs } from "@config/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { defineConfig, mergeConfig } from "vite";
import istanbul from "vite-plugin-istanbul";

// Repo root — two levels up from apps/web
const repoRoot = path.resolve(import.meta.dirname, "../..");

// https://vitejs.dev/config/
export default defineConfig(({ command, isPreview }) => {
  const config = mergeConfigs([
    createBaseConfig(),
    createReactConfig({ enableReactCompiler: command === "build" }),
    createPWAConfig({
      manifest: {
        name: "Pixi Image Editor",
        shortName: "Pixi Editor",
        description:
          "React web application using PixiJS to create a basic image editor. The editor can load an image and contains several different tools and mechanics to view and adjust the content.",
        themeColor: "#fe6c90",
        backgroundColor: "#1a1a2e",
      },
    }),
    {
      plugins: [tanstackRouter({ routeToken: "route" })],
    },
    { resolve: { dedupe: ["react", "react-dom"] } },
  ]);

  switch (command) {
    case "build":
      return mergeConfig(config, {
        base: "./",
      });
    case "serve":
      return mergeConfig(config, {
        plugins: [
          ...(isPreview ? [] : [basicSsl()]),
          // Istanbul instrumentation is only active when VITE_COVERAGE is set (E2E coverage runs).
          ...(process.env.VITE_COVERAGE
            ? [
                istanbul({
                  cwd: repoRoot,
                  include: ["apps/web/src/**/*.ts", "apps/web/src/**/*.tsx"],
                  exclude: ["node_modules", "**/*.stories.*", "**/*.test.*", "**/*.spec.*", "**/index.ts"],
                  extension: [".ts", ".tsx"],
                  requireEnv: false,
                }),
              ]
            : []),
        ],
        server: {
          strictPort: true,
          hmr: {
            overlay: false,
          },
        },
      });
  }
});
