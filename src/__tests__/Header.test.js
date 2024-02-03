import {fireEvent, render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";


describe("Header Test Cases", () => {
        it("Should render Login Button in the Header component", () => {
        render(
            <BrowserRouter>
                <Provider store = {appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", {name: "Login"})

        expect(loginButton).toBeInTheDocument();
        
    });

    it("Should render 0 items in Cart", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cartItems = screen.getByText(0);

        expect(cartItems).toBeInTheDocument();
    });

    it("Should render Logout Button when Login button is clicked", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", {name: "Login"})

        fireEvent.click(loginButton)

        const logoutButton = screen.getByRole("button", {name: "😎 Yashpreet"})

        expect(logoutButton).toBeInTheDocument()
    })
})
