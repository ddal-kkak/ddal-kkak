import { Square } from "./square";

export function Brand() {
  return (
    <div>
      <Square className={"bg-brand-01"} />
      <Square className={"bg-brand-02"} />
    </div>
  );
}

export function Primary() {
  return (
    <div>
      <Square className={"bg-primary-01"} />
      <Square className={"bg-primary-02"} />
    </div>
  );
}

export function Secondary() {
  return (
    <div>
      <Square className={"bg-secondary-01"} />
      <Square className={"bg-secondary-02"} />
    </div>
  );
}

export function DangerColor() {
  return (
    <div>
      <Square className={"bg-danger-01"} />
      <Square className={"bg-danger-02"} />
    </div>
  );
}
