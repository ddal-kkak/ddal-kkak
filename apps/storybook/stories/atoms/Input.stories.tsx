import { Meta } from "@storybook/react";
import { Input } from "@ddal-kkak/ui/atoms";

const meta: Meta<typeof Input> = {
  title: "atoms/Input",
  component: Input,
};

export default meta;

export const Default = () => (
  <div className={"space-y-2"}>
    <div>
      <div>outline</div>
      <div>
        <p>placeholder</p>
        <Input placeholder={"Text"} />
      </div>
      <div>
        <p>text</p>
        <Input placeholder={"Text"} value={"Text"} />
      </div>
      <div>
        <p>error</p>
        <Input placeholder={"danger"} required />
      </div>
      <div>
        <p>disabled</p>
        <Input placeholder={"disabled"} disabled />
      </div>
    </div>
    <div>
      <div>light</div>
      <div>
        <p>placeholder</p>
        <Input placeholder={"Text"} variant={"light"} />
      </div>
      <div>
        <p>text</p>
        <Input placeholder={"Text"} variant={"light"} value={"Text"} />
      </div>
      <div>
        <p>error</p>
        <Input placeholder={"danger"} variant={"light"} required />
      </div>
      <div>
        <p>disabled</p>
        <Input placeholder={"disabled"} variant={"light"} disabled />
      </div>
    </div>
  </div>
);

export const sizeList = () => {
  return (
    <div className={""}>
      <div>
        <p>xl</p>
        <Input size={"xl"} />
      </div>
      <div>
        <p>lg</p>
        <Input size={"lg"} />
      </div>
      <div>
        <p>md</p>
        <Input size={"md"} />
      </div>
      <div>
        <p>sm</p>
      </div>
      <Input size={"sm"} />
    </div>
  );
};
