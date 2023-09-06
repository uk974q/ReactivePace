import { render, screen } from "@testing-library/react"
import Header from "../src/components/Header"
import { Provider } from "react-redux"
import appStore from "../src/utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe("Test for Header Component", () => {
    it("Should load header with About", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const aboutLink = screen.getByText("About Us")
        expect(aboutLink).toBeInTheDocument()

    })
    it("Should load header with Card", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const cartLink = screen.getByText(/Cart/)
        expect(cartLink).toBeInTheDocument()

    })
})