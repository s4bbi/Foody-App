import Cards from "../components/Cards";
import {render, screen} from "@testing-library/react";
import MOCK_DATA from "../../mocks/resCardMock.json"
import "@testing-library/jest-dom";

it("should render the restaurant Card", () => {
    render(<Cards resData={MOCK_DATA} />);

    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
});

it("should render promoted label if the restaurant is promoted or not", () => {
    render(<Cards resData={MOCK_DATA} />);

    const promoLabel = screen.queryByTestId(/promoted/i);
    expect(promoLabel).not.toBeInTheDocument();

})
