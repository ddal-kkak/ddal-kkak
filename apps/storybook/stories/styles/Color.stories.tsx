import { Meta } from "@storybook/react";
import {
  Brand as _Brand,
  Primary as _Primary,
  Secondary as _Secondary,
  DangerColor,
} from "@ddal-kkak/ui/styles";

const meta: Meta = {
  title: "Styles/Color",
};

export default meta;

export const Brand = {
  render: () => <_Brand />,
};

export const Primary = {
  render: () => <_Primary />,
};

export const Secondary = {
  render: () => <_Secondary />,
};

export const Danger = {
  render: () => <DangerColor />,
};
