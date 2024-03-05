import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import render from "../../redux/reduxRender";

import Expenses from "./Expenses";

describe("TotalBalance test", () => {
  beforeEach(() => {
    render(<Expenses></Expenses>);
  });

  test("Should show a title", () => {
    expect(screen.getByTestId("titleTodayExpenses")).toBeDefined();
  });

  test("Should show the total expenses of the day", () => {
    expect(screen.getByTestId("totalTodayExpenses")).toBeDefined();
  });

  test("total expenses of the day shoud be a number", () => {
    expect(screen.getByTestId("totalTodayExpenses")).not.toBe(NaN);
  });
});
