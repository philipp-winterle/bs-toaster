import { buildSync } from "esbuild";

buildSync({
    entryPoints: {
        Toaster: "src/js/Toaster.mjs",
    },
    bundle: true,
    write: true,
    target: ["es2020", "chrome75", "firefox78", "safari14", "edge90", "node14"],
    outdir: "./dist/js",
    format: "esm",
    minify: true,
    platform: "browser",
    treeShaking: true,
    external: ["bootstrap"],
});

buildSync({
    entryPoints: {
        Toaster: "src/js/Toaster.mjs",
    },
    bundle: true,
    write: true,
    target: ["chrome75", "firefox78", "safari14", "edge90"],
    outfile: "./dist/js/Toaster.bundle.js",
    format: "esm",
    minify: true,
    treeShaking: true,
    platform: "browser",
});
