import { render, screen } from "@testing-library/react"
import Contact from "../src/components/Contact"
import "@testing-library/jest-dom"

describe("Test Suit for Contact Us Page", () => {
    test("Testing the heading", () => {
        render(<Contact />)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    })

    test("Testing the button", () => {
        render(<Contact />)
        const button = screen.getByText("Submit")
        expect(button).toBeInTheDocument()
    })
    test("Testing two input boxes", () => {
        render(<Contact />)
        const button = screen.getAllByRole("textbox")
        expect(button.length).toBe(2)
    })
})