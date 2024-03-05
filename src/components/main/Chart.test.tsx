import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import render from "../../redux/reduxRender";
import Chart from "./Chart";

describe("TotalBalance test", () => {
  beforeEach(() => {
    render(<Chart></Chart>);
  });

  test("Should show a chart", () => {
    expect(screen.getByTestId("chart")).toBeDefined();
  });

  test("Should show a title", () => {
    expect(screen.getByTestId("chartTitle")).toBeDefined();
  });

  test("The chart should be a canvas", () => {
    expect(screen.getByTestId("chart").tagName).toBe("CANVAS");
  });
});
