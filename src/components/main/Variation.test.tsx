import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import render from "../../redux/reduxRender";
import Variation from "./Variation";

describe("TotalBalance test", () => {
  beforeEach(() => {
    render(<Variation></Variation>);
  });

  test("Should show a variation text", () => {
    expect(screen.getByTestId("variationText")).toBeDefined();
  });

  test("should show the variation between two days' expenses", () => {
    expect(screen.getByTestId("variation")).toBeDefined();
  });

  test("variation shoud be a number", () => {
    expect(screen.getByTestId("variation")).not.toBe(NaN);
  });
});
