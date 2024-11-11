import NextImage from "next/image";
import { ComponentPropsWithoutRef } from "react";

export default function Image({
  src,
  alt,
  ...props
}: ComponentPropsWithoutRef<"img">) {
  return (
    <div className="flex flex-col justify-center items-center">
      <NextImage
        src={src ?? ""}
        alt={alt ?? ""}
        // @ts-expect-error god knows why ts complains
        height={500}
        {...props}
        className="rounded-xl"
      />
      {alt && <div className="text-lg font-bold -mt-4 text-center">{alt}</div>}
    </div>
  );
}
