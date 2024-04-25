// 렌더링 테스트 : 렌더링이 올바르게 되는지 테스트

// 상태 및 스타일 테스트 : 컴포넌트 상태에 따라 스타일이 제대로 적용되는지 테스트
// - color : default, brand, primary, secondary, danger
// - variant : solid, light
// - align : left, center
// 오른쪽엔 아이콘 추가 가능, 왼쪽엔 X 표시 노출 여부

// 인터랙션 테스트 : X 아이콘 클릭시 토스트가 사라진다 , 토스트가 사라지는 시간이 지나면 토스트가 사라진다.

import { describe, it } from "vitest";

describe("toast 컴포넌트", () => {
  it("렌더링 테스트", () => {});
});

describe("toast 컴포넌트 컬러를 테스트 합니다.", () => {
  // TODO: 테스하기 쉬운 배열 생각해보기
  const colorList = ["default", "brand", "primary", "secondary", "danger"];

  colorList.map(() => {
    it("", () => {});
  });
});

describe("toast 컴포넌트의 variant를 테스트 합니다.", () => {
  const variantList = ["solid", "light"];

  variantList.map(() => {
    it("", () => {});
  });
});

describe("toast icon 을 테스트 합니다.", () => {
  it("기본 값일 경우 오른쪽에 x 아이콘이 노출됩니다.", () => {});
  it("왼쪽 아이콘을 없앨 수 있습니다.", () => {});

  // TODO: 오른쪽 아이콘
});

describe("toast align 을 테스트 합니다.", () => {
  it("align 값이 없을때 왼쪽 정렬을 합니다. ", () => {});
  it("align 값이 left 일 경우 왼쪽 정렬을 합니다.", () => {});
  it("align 값이 center 일 경우 가운데 정렬을 합니다.", () => {});
});

describe("toast 인터랙션을 테스트 합니다.", () => {
  it("X 아이콘 클릭시 토스트가 사라집니다..", () => {});
  // 2초? 3초? 몇초?
  it("토스트가 사라지는 시간이 지나면 토스트가 사라집니다.", () => {});

  // TODO: 또 뭐있지?
});
