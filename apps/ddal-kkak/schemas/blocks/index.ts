import { z } from "zod";
export type BlockSchemaProps<T extends z.ZodObject<any>> = z.infer<T>["data"];

// 순서 중요 안그러면 테스트코드에서 에러 발생
export * from "./util";
// 순서 중요
export * from "./style";

// UI Block
export * from "./spacer";
export * from "./text";
export * from "./video";
export * from "./image";
