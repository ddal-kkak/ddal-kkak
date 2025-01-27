import { BlockSchemaProps, SpacerBlockSchema } from "@/schemas/blocks";

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
