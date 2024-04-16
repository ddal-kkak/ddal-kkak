import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ddal-kkak/ui/atoms";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {
  render: () => <Button>Click me!</Button>,
};
