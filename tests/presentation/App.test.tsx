import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "@/main/App";

describe("First test", () => {
  test("shoud render app", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toBeTruthy();
  });
});
