import { createRoll, createFrame } from "./index.js";
/*
describe("createRoll", () => {
  test("returns number of pins knocked down in the roll", () => {
    expect(createRoll()).toBe(1);
  });
  test("returns number of pins knocked down in the roll", () => {
    expect(createRoll()).toBe(10);
  });
});
*/
describe("createFrame", () => {
  test("returns number of pins knocked down in the frame ", () => {
    expect(createFrame()).toBe(10);
  });
});
