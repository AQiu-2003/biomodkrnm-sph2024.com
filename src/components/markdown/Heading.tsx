import React, { ComponentPropsWithoutRef } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import { omit } from "lodash";

function HeadingWrapper({
  as: Component,
  ...props
}: ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4"> & {
  as: "h1" | "h2" | "h3" | "h4";
}) {
  const id = props.id;
  const otherProps = omit(props, ["id"]);

  return (
    <Component className="group relative" {...otherProps}>
      {id && (
        <>
          <div id={id} className="anchor relative -top-32" />
          <a
            href={`#${id}`}
            className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={`Link to ${props.children}`}
          >
            <LinkIcon className="w-4 h-4" />
          </a>
        </>
      )}
      {props.children}
    </Component>
  );
}

export function H1(props: ComponentPropsWithoutRef<"h1">) {
  return <HeadingWrapper as="h1" {...props} />;
}

export function H2(props: ComponentPropsWithoutRef<"h2">) {
  return <HeadingWrapper as="h2" {...props} />;
}

export function H3(props: ComponentPropsWithoutRef<"h3">) {
  return <HeadingWrapper as="h3" {...props} />;
}

export function H4(props: ComponentPropsWithoutRef<"h4">) {
  return <HeadingWrapper as="h4" {...props} />;
}
