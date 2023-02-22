function testing() {
  return "testing";
}

describe("should return testing", () => {
  it("should return testing", () => {
    expect(testing()).toBe("testing");
  });
});
