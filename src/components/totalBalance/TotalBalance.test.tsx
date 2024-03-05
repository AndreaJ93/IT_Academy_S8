import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import render from "../../redux/reduxRender";
import TotalBalance from "./TotalBalance";

describe("TotalBalance test", () => {
  beforeEach(() => {
    render(<TotalBalance></TotalBalance>);
  });

  test("Should show a title", () => {
    expect(screen.getByTestId("title")).toBeDefined();
  });

  test("Should show two arrow buttons", () => {
    expect(screen.getByTestId("leftArrow")).toBeDefined();
    expect(screen.getByTestId("rightArrow")).toBeDefined();
  });

  test("Should show the total expenses", () => {
    expect(screen.getByTestId("total")).toBeDefined();
  });

  test("total expenses shoud be a number", () => {
    expect(screen.getByTestId("total")).not.toBe(NaN);
  });
});
