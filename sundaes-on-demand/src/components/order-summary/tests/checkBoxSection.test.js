import { render, fireEvent, screen } from "@testing-library/react";
import CheckBoxSection from "./../checkBoxSection";

describe("Checkbox tests", () => {
  test("checkBox and Button co-ordination", () => {
    render(<CheckBoxSection></CheckBoxSection>);
    const checkBox = screen.getByRole("checkbox", { name: "Agree the terms" });
    const btn = screen.getByRole("button", { name: "Confirm order" });
    expect(btn).toBeDisabled();
    fireEvent.click(checkBox);
    expect(btn).toBeEnabled();
  });
});
