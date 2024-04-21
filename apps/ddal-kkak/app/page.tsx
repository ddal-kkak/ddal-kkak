import styles from "./page.module.css";
import { Button } from "@ddal-kkak/ui/atoms";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={"bg-pink-500"}>Tailwind Setting Test</div>
      <Button>Click me!</Button>
    </main>
  );
}
