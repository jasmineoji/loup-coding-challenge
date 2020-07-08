import React from "react"
import { render } from "@testing-library/react"
import Article from "."

test("renders Article component", () => {
  const wrapper = render(<Article />)
  expect(wrapper).toMatchSnapshot()
})
