import { render, screen} from "@testing-library/react"
import MOCK_DATA from "../../mocks/resListMock.json"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom"
import { fireEvent } from "@testing-library/dom"
import CardsDiv from "../components/CardsDiv"

it("Should render the Search Button in the Body component",  async () => {

    global.fetch = jest.fn( () => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA)
            }
        })
    })

    await act ( 
            async () => 
            render( 
                <BrowserRouter> 
                    <CardsDiv/> 
                </BrowserRouter>
            )
        )
        

    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    expect(cardsBeforeSearch.length).toBe(16)
    
    const searchButton = screen.getByRole("button", {name: "Search"})

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target: {value: "Pizza"}})

    fireEvent.click(searchButton)

    const cardsAfterSearch = screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(2)

})