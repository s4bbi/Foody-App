import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter, json } from "react-router-dom"
import appStore from "../utils/appStore"
import MOCK_DATA from "../../mocks/cartItemsMock.json"
import {act} from "react-dom/test-utils"
import RestaurantMenu from "../components/RestaurantMenu"
import "@testing-library/jest-dom"
import Header from "../components/Header"

global.fetch = jest.fn(() => {
    return(
        Promise.resolve( {
            json: () => {
                return (Promise.resolve(MOCK_DATA))
            }
        }
        )
    )
})

it("should render the Cart Component with Recommended Accordian", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        )
    });

    const recommendedAccordian = screen.getByText("Recommended (18)")

    expect(recommendedAccordian).toBeInTheDocument()

    const foodItems = screen.getAllByTestId("menuItems")

    expect(foodItems.length).toBe(18)

    const cartItemsBeforeClick = screen.getByText("0")

    const addItemBtn = screen.getAllByRole("button", {name: "ADD +"})

    fireEvent.click(addItemBtn[0])

    const cartItemsAfterClick = screen.getByText("1")

    expect(cartItemsAfterClick).toBeInTheDocument()

    fireEvent.click(addItemBtn[1])

    const cartItemsAfter2ndClick = screen.getByText("2")

    expect(cartItemsAfter2ndClick).toBeInTheDocument()

})

