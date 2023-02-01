import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";
import HomeTest from "./HomeTest.js";
import NavBarTest from ".NavBarTest.js";
import AboutTest from "./AboutTest.js";


test("it renders without crashing", () => {
  try {
    expect(() => render(<App />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to import the required components!");
  }
});
exoprt default AppTest;