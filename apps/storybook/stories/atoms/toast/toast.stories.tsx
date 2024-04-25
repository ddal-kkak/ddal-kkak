import { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@ddal-kkak/ui/atoms";

const meta: Meta<typeof Toast> = {
  title: "atoms/Toast",
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;
export const Default: Story = {
  render: () => <Toast />,
};
