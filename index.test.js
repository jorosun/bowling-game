import { createRoll } from "./index.js";

describe("createRoll", () => {
  test("returns number of pins knocked down", () => {
    expect(createRoll()).toBe("1");
  });
});
