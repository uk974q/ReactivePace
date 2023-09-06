import { render, screen } from "@testing-library/react"
import MOCK_DATA from "./mocks/resDataCard.json"
import Card from "../src/components/Card"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe("Test case for Restaurant Cards", () => {
    it("Should render Card with the props", () => {
        render(
        <BrowserRouter>
            <Card resData={MOCK_DATA}/>
        </BrowserRouter>
        )

        let heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()

    })
})