const { sum } = require("../sum")

test("Test to fetch the sum", () => {
    const result = sum(5,6)
    expect(result).toBe(11)
})