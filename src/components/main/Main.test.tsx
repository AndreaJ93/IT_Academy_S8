import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import render from "../../redux/reduxRender";
import Main from "./Main";

describe("TotalBalance test", () => {
  beforeEach(() => {
    render(<Main></Main>);
  });

  test("Should contain Chart component", () => {
    expect(screen.queryByText("Chart")).toBeDefined();
  });

  test("Should contain Expenses component", () => {
    expect(screen.queryByText("Expenses")).toBeDefined();
  });
});
