import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import { ReactNode } from "react";
// import { MemoryRouter } from "react-router-dom";

const render = (component: ReactNode) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

export default render;
