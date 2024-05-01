import { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Toast,
  Toaster,
  useToast,
  ToastParams,
} from "@ddal-kkak/ui/atoms";

type ToastExampleProps = ToastParams;

const meta: Meta<typeof Toast> = {
  title: "atoms/Toast",
};

export default meta;

type Story = StoryObj<ToastExampleProps>;

const ToastExample = (props: ToastExampleProps) => {
  const { toast } = useToast();
  const handleClick = () => {
    toast({
      ...props,
    });
  };
  return <Button onClick={handleClick}>토스트</Button>;
};

export const Default: Story = {
  render: (args) => (
    <Toaster>
      <ToastExample {...args} />
    </Toaster>
  ),
  args: {
    message: "토스트 메시지",
    isShowCloseIcon: true,
    align: "left",
    theme: "default",
    variant: "solid",
    second: 3,
  },
  argTypes: {
    variant: {
      options: ["solid", "light"],
      control: {
        type: "radio",
      },
    },
    theme: {
      options: ["default", "brand", "primary", "secondary", "danger"],
      control: {
        type: "radio",
      },
    },
    isShowCloseIcon: {
      control: {
        type: "boolean",
      },
    },
    align: {
      options: ["left", "center"],
      control: {
        type: "radio",
      },
    },

    second: {
      control: {
        type: "number",
      },
    },
  },
};

export const ToastShowCase = () => {
  return (
    <div>
      <div>
        <div>Solid</div>
        <Toast theme={"default"}>메시지</Toast>
        <Toast theme={"brand"}>메시지</Toast>
        <Toast theme={"primary"}>메시지</Toast>
        <Toast theme={"secondary"}>메시지</Toast>
        <Toast theme={"danger"}>메시지</Toast>
      </div>
      <div>
        <div>Light</div>
        <Toast theme={"default"} variant={"light"}>
          메시지
        </Toast>
        <Toast variant={"light"} theme={"brand"}>
          메시지
        </Toast>
        <Toast variant={"light"} theme={"primary"}>
          메시지
        </Toast>
        <Toast variant={"light"} theme={"secondary"}>
          메시지
        </Toast>
        <Toast variant={"light"} theme={"danger"}>
          메시지
        </Toast>
      </div>
    </div>
  );
};

export const Align = () => {
  return (
    <div>
      <div>left</div>
      <Toast align={"left"}>메시지</Toast>
      <div>center</div>
      <Toast align={"center"}>메시지</Toast>
      <div className={"py-2"} />
      <div>left</div>
      <Toast align={"left"} isShowCloseIcon={false}>
        메시지
      </Toast>
      <div>center</div>
      <Toast align={"center"} isShowCloseIcon={false}>
        메시지
      </Toast>
    </div>
  );
};
