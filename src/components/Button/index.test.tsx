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

// Render the button component with different combinations of props and ensure it renders without errors.

// Verify that the button text or child elements are rendered correctly.

// Simulate a click event on the button and assert that the onClick prop is called.

// Verify that the appropriate CSS classes are applied based on the props passed to the component.

// Test different button variants (primary, secondary, success, warning, danger) and assert that the correct background color is applied.

// Test different button sizes (xs, s, m, l, xl, auto) and assert that the button has the correct padding, border radius, and font size.

// Test the hover state of the button and assert that the appropriate CSS classes are applied.

// Test the button's disabled state by setting the disabled prop to true and assert that the button is non-interactive and has reduced opacity.

// Test the pending state by setting the pending prop to true and assert that the loader component is displayed.

// Test the integration with the Loader component by asserting that it is rendered when the pending prop is true.
