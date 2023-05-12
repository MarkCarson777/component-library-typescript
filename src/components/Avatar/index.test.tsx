import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Avatar } from "./";

describe("render Avatar component correctly", async () => {
  it("should render the Avatar component correctly", async () => {
    const wrapper = render(<Avatar />);
    const container = wrapper.container.querySelector("div") as HTMLElement;

    expect(container).toBeInTheDocument();
  });
});

describe("display the correct label", async () => {
  it("should display the correct label", async () => {
    const wrapper = render(<Avatar />);
    const container = wrapper.container.querySelector("div") as HTMLElement;

    expect(container.textContent).toBe("Avatar");
  });
});
