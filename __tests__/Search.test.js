import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../src/components/Body"
import MOCK_DATA from "./mocks/ResData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
}) 

describe("Test the search functionality", () => {
    it("Should Search by text Burger input and get 3 filtered restaurant cards", async () => {
        await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))
        const totalCards = screen.getAllByTestId("card-test")
        expect(totalCards.length).toBe(20)
        const searchButton = screen.getByRole("button", {name: "Search"})
        expect(searchButton).toBeInTheDocument()

        const searchInput = screen.getByTestId("search-input")

        fireEvent.change(searchInput, { target: {value: "Burger"}})
        fireEvent.click(searchButton)

        const filteredCards = screen.getAllByTestId("card-test")
        expect(filteredCards.length).toBe(3)

    })
    
    it("Should filter top restaurant", async () => {
        await act(async () => render(<BrowserRouter><Body/></BrowserRouter>))
        const totalCards = screen.getAllByTestId("card-test")
        expect(totalCards.length).toBe(20)
        const filterButton = screen.getByRole("button", {name: "Filter Top Rated"})
        expect(filterButton).toBeInTheDocument()

        fireEvent.click(filterButton)
        const filteredCards = screen.getAllByTestId("card-test")
        expect(filteredCards.length).toBe(7)

    })
})