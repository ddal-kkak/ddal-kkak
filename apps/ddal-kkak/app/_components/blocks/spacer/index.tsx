type SpacerProps = {
  blockStyle?: {
    height?: number;
    backgroundColor?: string;
  };
};

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
