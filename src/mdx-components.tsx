import type { MDXComponents } from "mdx/types";
import Image from "@/components/markdown/Image";
import { H1, H2, H3, H4 } from "@/components/markdown/Heading";
const myComponents: MDXComponents = {
  img: Image,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...myComponents,
    ...components,
  };
}
