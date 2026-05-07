#!/usr/bin/env node
// Generates PWA icon assets from assets/template-512x512.svg and moves them to public/.
// The @vite-pwa/assets-generator always outputs next to the source image, so a move step
// is needed to put the files where Vite and vite-plugin-pwa expect them.
import { execSync } from "node:child_process";
import { renameSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const webDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = resolve(webDir, "src/assets/logo");
const publicDir = resolve(webDir, "public");

execSync("pwa-assets-generator", { cwd: webDir, stdio: "inherit" });

for (const file of [
  "pwa-192x192.png",
  "pwa-512x512.png",
  "favicon.ico",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "apple-touch-icon.png",
]) {
  renameSync(resolve(assetsDir, file), resolve(publicDir, file));
}
