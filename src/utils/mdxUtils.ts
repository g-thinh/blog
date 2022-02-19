import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";

export const LANDING_PATH = path.join(process.cwd(), "src/mdx");
export const BLOG_PATH = path.join(process.cwd(), "src/mdx/blog");

export function getSourceOfFile(fileName: string, contentPath: string) {
  return fs.readFileSync(path.join(contentPath, fileName), "utf-8");
}

export async function getSinglePost(slug: string, contentPath: string) {
  const source = getSourceOfFile(slug + ".mdx", contentPath).trim();

  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const { code, frontmatter } = await bundleMDX({
    source: source,
    cwd: contentPath,
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      return options;
    },
  });

  return {
    frontmatter,
    code,
  };
}
