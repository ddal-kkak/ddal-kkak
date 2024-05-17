import { DefaultLayout } from "@/app/_components/common";
import { BlockSchemaProps, ImageBlockSchema } from "@/schemas/blocks";

type ImageBlockProps = BlockSchemaProps<typeof ImageBlockSchema>;

export function ImageBlock({ blockData, blockStyle }: ImageBlockProps) {
  const { src, alt } = blockData;
  const {
    width = "100%",
    backgroundColor,
    justifyContent = "flex-start",
    paddingTop = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    paddingRight = 0,
  } = blockStyle ?? {};

  return (
    <div
      className={"w-full"}
      style={{
        backgroundColor,
      }}
    >
      <DefaultLayout>
        <div
          className={"flex w-full"}
          style={{
            justifyContent,
            backgroundColor,
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              width,
            }}
          />
        </div>
      </DefaultLayout>
    </div>
  );
}
