import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Button } from "./";

describe("render Button component correctly", async () => {
  it("should render the Button component correctly", async () => {
    const wrapper = render(
      <Button primary size="s" onClick={() => console.log("click")}>
        Click Me!
      </Button>
    );
    const button = wrapper.container.querySelector(
      "button"
    ) as HTMLButtonElement;

    expect(button).toBeInTheDocument();
  });
});

describe("display the correct label", async () => {
  it("should display the correct label", async () => {
    const wrapper = render(
      <Button primary size="s" onClick={() => console.log("click")}>
        Click Me!
      </Button>
    );
    const button = wrapper.container.querySelector(
      "button"
    ) as HTMLButtonElement;

    expect(button.textContent).toBe("Click Me!");
  });
});
