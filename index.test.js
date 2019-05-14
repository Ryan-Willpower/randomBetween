import randomBetween from "./random";

describe("random function", () => {
  it("should not less than 45", () => {
    for (let i = 0; i < 99999; i++) {
      const result = randomBetween(45, 50);
      expect(result).not.toBeLessThan(45);
    }
  });

  it("should not more than 50", () => {
    for (let i = 0; i < 99999; i++) {
      const result = randomBetween(45, 50);
      expect(result).not.toBeGreaterThan(50);
    }
  });
});
