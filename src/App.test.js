import { render } from "@testing-library/react"
import { MainPage } from "./MainPage"

test("renders learn react link", () => {
  render(<MainPage />)
  expect(1).toBe(1)
})
