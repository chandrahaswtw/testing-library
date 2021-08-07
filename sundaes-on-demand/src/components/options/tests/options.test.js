import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "./../options";

describe("options test", () => {
  test("scoops rendering", async () => {
    render(<Options option="scoops" />);
    const imgArray = await screen.findAllByRole("img", { name: /scoops$/i });
    expect(imgArray).toHaveLength(2);
    const altText = imgArray.map((el) => el.alt);
    expect(altText).toEqual(["Mint chip scoops", "Vanilla scoops"]);
  });

  test("toppings rendering", async () => {
    render(<Options option="toppings" />);
    const imgArray = await screen.findAllByRole("img", { name: /toppings$/i });
    expect(imgArray).toHaveLength(3);
    const altText = imgArray.map((el) => el.alt);
    expect(altText).toEqual([
      "M&Ms toppings",
      "Hot fudge toppings",
      "Peanut butter cups toppings",
    ]);
  });
});
