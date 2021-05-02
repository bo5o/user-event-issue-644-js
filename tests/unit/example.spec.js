import { screen, render } from "@testing-library/vue";

import MyComponent from "../../src/components/MyComponent.vue";
import userEvent from "@testing-library/user-event";

describe("MyComponent.vue", () => {
  it("can change value", async () => {
    render(MyComponent);

    const input = screen.getByPlaceholderText("some field");

    await userEvent.type(input, "abcd", { delay: 50 });
  });
});
