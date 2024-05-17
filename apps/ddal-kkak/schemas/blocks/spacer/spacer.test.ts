import { describe, expect, it } from "vitest";
import { SpacerBlockSchema } from "@/schemas/blocks";

describe("Spacer Test", () => {
  it("should parse valid SpacerBlock data", () => {
    const data = SpacerBlockSchema.parse({
      name: "SpacerBlock",
      data: {
        blockStyle: {
          height: "123",
          backgroundColor: "#FFAABB",
        },
      },
    });
    expect(data).toEqual({
      name: "SpacerBlock",
      data: {
        blockStyle: {
          height: 123,
          backgroundColor: "#FFAABB",
        },
      },
    });
  });

  // it("should throw error when height is not a number", () => {
  //   expect(() => {
  //     SpacerBlockSchema.parse({
  //       name: "SpacerBlock",
  //       data: {
  //         blockStyle: {
  //           height: "김동성",
  //           backgroundColor: "#FFAABB",
  //         },
  //       },
  //     });
  //   }).toThrowError("'김동성'는 숫자로 변환할 수 없습니다.");
  // });

  // it("should throw error when height is not a number", () => {
  //   expect(() => {
  //     SpacerBlockSchema.parse({
  //       name: "SpacerBlock",
  //       data: {
  //         blockStyle: {
  //           height: true,
  //           backgroundColor: "#FFAABB",
  //         },
  //       },
  //     });
  //   }).toThrowError(
  //     "'true'는 유효한 타입이 아닙니다. 문자열이나 숫자여야 합니다.",
  //   );
  // });

  it("should throw error when backgroundColor is not a valid hex color", () => {
    expect(() => {
      SpacerBlockSchema.parse({
        name: "SpacerBlock",
        data: {
          blockStyle: {
            height: 123,
            backgroundColor: "#김동성",
          },
        },
      });
    }).toThrowError("유효한 HEX 컬러 문자열이 아닙니다.");
  });
});
