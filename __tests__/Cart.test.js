import { fireEvent, render, screen } from "@testing-library/react"
import Menu from "../src/components/Menu"
import MOCK_DATA from "./mocks/MenuData.json"
import { act } from "react-dom/test-utils"
import { Provider } from "react-redux"
import appStore from "../src/utils/appStore"
import "@testing-library/jest-dom"
import Header from "../src/components/Header"
import { BrowserRouter } from "react-router-dom"
import Cart from "../src/components/Cart"

global.fetch =jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

describe("Test the add to cart flow",  () => {
    it("Should test by adding 3 items to cart", async () => {
        await act(async () => render(<Provider store={appStore}><BrowserRouter><Header /><Menu /><Cart /></BrowserRouter></Provider>))
        const accordion = screen.getAllByTestId("accordion")
        expect(accordion.length).toBe(7)
        const cartAddIcons = screen.getAllByTestId("addToCart")
        for(let i = 0; i< 5; i++){
            fireEvent.click(cartAddIcons[i])
        }
        const heading = screen.getByText("Cart - 5")
        expect(heading).toBeInTheDocument()
        const cartRemoveItems = screen.getAllByTestId("removeFromCart")
        expect(cartRemoveItems.length).toBe(5)

    })
})