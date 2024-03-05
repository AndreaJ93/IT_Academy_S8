import { fireEvent, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import render from "../../redux/reduxRender";
import Languages from "./Languages";
import i18n from "../../i18n";

describe("TotalBalance test", () => {
  beforeEach(() => {
    render(<Languages></Languages>);
  });

  test("Should show three icon-images", () => {
    expect(screen.getByTestId("enImg")).toBeDefined();
    expect(screen.getByTestId("esImg")).toBeDefined();
    expect(screen.getByTestId("catImg")).toBeDefined();
  });

  test("By pressing the (en)button change to English", () => {
    fireEvent.click(screen.getByTestId("enImg"));
    expect(i18n.language).toBe("en");
  });

  test("By pressing the (es)button change to Spanish", () => {
    fireEvent.click(screen.getByTestId("esImg"));
    expect(i18n.language).toBe("es");
  });

  test("By pressing the (cat)button change to Catalan", () => {
    fireEvent.click(screen.getByTestId("catImg"));
    expect(i18n.language).toBe("cat");
  });
});
