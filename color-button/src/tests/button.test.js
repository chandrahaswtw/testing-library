import { render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent from "./../components/button";

describe("BUTTON COMPONENT TESTS", () => {
  test("button has the initial color", () => {
    render(<ButtonComponent></ButtonComponent>);
    const btn = screen.getByRole("button", { name: "Change to blue" });
    expect(btn).toHaveStyle({
      backgroundColor: "red",
    });
  });

  test("button has the initial text", () => {
    render(<ButtonComponent></ButtonComponent>);
    const btn = screen.getByRole("button", { name: "Change to blue" });
    expect(btn).toHaveTextContent("Change to blue");
  });

  test("button turns to blue when clicked", () => {
    render(<ButtonComponent></ButtonComponent>);
    const btn = screen.getByRole("button", { name: "Change to blue" });
    fireEvent.click(btn);
    expect(btn).toHaveStyle({
      backgroundColor: "blue",
    });
  });

  test("checkbox disability", () => {
    render(<ButtonComponent></ButtonComponent>);
    const btn = screen.getByRole("button", { name: "Change to blue" });
    const check = screen.getByRole("checkbox", { name: "CLICK ME" });

    fireEvent.click(check);
    expect(btn).toBeDisabled();

    fireEvent.click(check);
    expect(btn).toBeDisabled();
  });
});
