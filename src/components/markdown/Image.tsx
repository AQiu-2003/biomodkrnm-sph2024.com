import NextImage from "next/image";
import { ComponentPropsWithoutRef } from "react";

export default function Image({
  src,
  alt,
  ...props
}: ComponentPropsWithoutRef<"img">) {
  return (
    <div className="flex justify-center">
      <NextImage
        src={src ?? ""}
        alt={alt ?? ""}
        height={500}
        {...props}
        className="rounded-xl"
      />
    </div>
  );
}
