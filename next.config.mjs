import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import createMDX from '@next/mdx';
import rehypeMdxImportMedia from 'rehype-mdx-import-media';
import rehypeSlug from 'rehype-slug';
import remarkUnwrapImages from 'remark-unwrap-images';

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      // 如果需要远程图片
    ],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkUnwrapImages],
    rehypePlugins: [rehypeMdxImportMedia, rehypeSlug],
  },
});

export default withMDX(nextConfig);
