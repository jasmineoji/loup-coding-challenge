import { calculateAgerageRating } from "./maths"

describe("test calculate agerage rating function", () => {
  it("new rating of 4 => average should be 3.5", () => {
    const average = calculateAgerageRating(17, 5, 4)
    expect(average).toEqual(3.5)
  })

  it("new rating of 5 => average should not be 3.5", () => {
    const average = calculateAgerageRating(17, 5, 5)
    expect(average).not.toEqual(3.5)
  })
})
