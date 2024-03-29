import fs from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import remarkMdxCodeMeta from "remark-mdx-code-meta";

export type MDXFrontmatter = {
  title?: string;
  publishedDate?: Date;
  description?: string;
  imageUrl?: string;
  imageAltText?: string;
  tags?: Array<string>;
};

export const LANDING_PATH = path.join(process.cwd(), "src/mdx");
export const BLOG_PATH = path.join(process.cwd(), "src/mdx/blog");

export function getSourceOfFile(fileName: string, contentPath: string) {
  return fs.readFileSync(path.join(contentPath, fileName), "utf-8");
}

type GetPostsArgs = {
  tags?: string[];
  limit?: number;
};

export type Post = {
  frontmatter?: MDXFrontmatter;
  slug?: string;
  full_slug?: string;
};

export function getPosts(args?: GetPostsArgs): Post[] {
  const posts = fs
    .readdirSync(BLOG_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName, BLOG_PATH);
      const slug = fileName.replace(/\.mdx?$/, "");
      const full_slug = `/blog/${slug}`;
      const { data } = matter(source);

      return {
        frontmatter: data as MDXFrontmatter,
        slug: slug,
        full_slug,
      };
    });

  posts.sort((a, b) => {
    if (a.frontmatter.publishedDate && b.frontmatter.publishedDate) {
      return (
        +new Date(b.frontmatter?.publishedDate) -
        +new Date(a.frontmatter?.publishedDate)
      );
    } else {
      return 0;
    }
  });

  if (args?.tags) {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.tags?.some((tag) => args.tags?.includes(tag))
    );
    filteredPosts.length = args.limit ?? filteredPosts.length;
    return filteredPosts;
  }

  posts.length = args?.limit ?? posts.length;
  return posts;
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

  const { code, frontmatter } = await bundleMDX<MDXFrontmatter>({
    source: source,
    cwd: contentPath,
    mdxOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxCodeMeta,
      ];
      return options;
    },
  });

  return {
    frontmatter,
    code,
  };
}
