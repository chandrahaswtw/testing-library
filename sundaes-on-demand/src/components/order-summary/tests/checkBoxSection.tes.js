import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckBoxSection from "../checkBoxSection";

describe("Checkbox tests", () => {
  test("checkBox and Button co-ordination", () => {
    render(<CheckBoxSection></CheckBoxSection>);
    const checkBox = screen.getByRole("checkbox", { name: "Agree the terms" });
    const btn = screen.getByRole("button", { name: "Confirm order" });
    expect(btn).toBeDisabled();
    userEvent.click(checkBox);
    expect(btn).toBeEnabled();
  });

  test("Hover tests", () => {
    render(<CheckBoxSection></CheckBoxSection>);
    const checkBox = screen.getByText("Terms and Conditions");
    userEvent.hover(checkBox);
    expect(screen.getByText(/No terms/i)).toBeInTheDocument();
    userEvent.unhover(checkBox);
    expect(screen.queryByText(/No terms/i)).not.toBeInTheDocument();
  });
});
