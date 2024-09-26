import createMDX from "@next/mdx";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import rehypeSlug from "rehype-slug";
import remarkUnwrapImages from "remark-unwrap-images";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkUnwrapImages],
    rehypePlugins: [rehypeMdxImportMedia, rehypeSlug],
  },
});

export default withMDX(nextConfig);
