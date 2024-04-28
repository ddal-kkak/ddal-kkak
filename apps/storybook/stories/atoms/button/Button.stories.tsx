import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ddal-kkak/ui/atoms";
import { Fragment } from "react";

const meta: Meta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me!",
    variant: "solid",
    theme: "default",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "light", "outline", "ghost", "text"],
    },
    theme: {
      control: "select",
      options: ["default", "gray", "brand", "primary", "secondary", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

type ButtonVariantAndColor = {
  variant: "solid" | "light" | "outline" | "ghost" | "text";
  theme: "default" | "gray" | "brand" | "primary" | "secondary" | "danger";
};

const solidList: ButtonVariantAndColor[] = [
  { variant: "solid", theme: "default" },
  { variant: "solid", theme: "gray" },
  { variant: "solid", theme: "brand" },
  { variant: "solid", theme: "primary" },
  { variant: "solid", theme: "secondary" },
  { variant: "solid", theme: "danger" },
];

const lightList: ButtonVariantAndColor[] = [
  { variant: "light", theme: "default" },
  { variant: "light", theme: "gray" },
  { variant: "light", theme: "brand" },
  { variant: "light", theme: "primary" },
  { variant: "light", theme: "secondary" },
  { variant: "light", theme: "danger" },
];

const outlineList: ButtonVariantAndColor[] = [
  { variant: "outline", theme: "default" },
  { variant: "outline", theme: "gray" },
  { variant: "outline", theme: "brand" },
  { variant: "outline", theme: "primary" },
  { variant: "outline", theme: "secondary" },
  { variant: "outline", theme: "danger" },
];

const ghostList: ButtonVariantAndColor[] = [
  { variant: "ghost", theme: "default" },
  { variant: "ghost", theme: "gray" },
  { variant: "ghost", theme: "brand" },
  { variant: "ghost", theme: "primary" },
  { variant: "ghost", theme: "secondary" },
  { variant: "ghost", theme: "danger" },
];

const textList: ButtonVariantAndColor[] = [
  { variant: "text", theme: "default" },
  { variant: "text", theme: "gray" },
  { variant: "text", theme: "brand" },
  { variant: "text", theme: "primary" },
  { variant: "text", theme: "secondary" },
  { variant: "text", theme: "danger" },
];

export const ButtonShowcase = () => {
  return (
    <div className={"space-y-2"}>
      {[solidList, lightList, outlineList, ghostList, textList].map(
        (list, index) => (
          <div>
            <h2 className={"headline-18 mb-2"}>
              {(list[0] as ButtonVariantAndColor).variant}
            </h2>
            <div className={"space-x-2"}>
              {list.map((item) => {
                return (
                  <Fragment key={item.theme}>
                    <Button variant={item.variant} theme={item.theme}>
                      button
                    </Button>
                  </Fragment>
                );
              })}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export const sizeList = () => {
  return (
    <div className={""}>
      <div>
        <h1>Small</h1>
        <Button size={"sm"}>button</Button>
      </div>
      <div>
        <h1>Medium</h1>
        <Button size={"md"}>button</Button>
      </div>
      <div>
        <h1>Large</h1>
        <Button size={"lg"}>button</Button>
      </div>
      <div>
        <h1>XLarge</h1>
        <Button size={"xl"}>button</Button>
      </div>
    </div>
  );
};
