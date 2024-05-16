import { BlockSchemaProps } from "@/schemas/blocks";
import { SpacerBlockSchema } from "@/schemas/blocks/spacer";

type SpacerProps = BlockSchemaProps<typeof SpacerBlockSchema>;

export function SpacerBlock({ blockStyle }: SpacerProps) {
  const { height = 1, backgroundColor = "transparent" } = blockStyle ?? {};
  return (
    <div
      className={"w-full"}
      style={{
        height,
        backgroundColor,
      }}
    />
  );
}
