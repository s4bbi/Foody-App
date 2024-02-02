import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact page test cases", () => {

    test("Should test if heading of Contact Component is rendered or not", () => {

        render(<Contact/>)
    
        const heading = screen.getByRole("heading")
    
        expect(heading).toBeInTheDocument()
    });
    
    test("Should test if Submit button is rendered or not", () => {
        render(<Contact/>)
    
        const button = screen.getByRole("button")
    
        expect(button).toBeInTheDocument()
    })
    
    test("Should test if anything named Submit is rendered or not",() => {
        render(<Contact/>)
    
        const submitText = screen.getByText("Submit")
    
        expect(submitText).toBeInTheDocument();
    
    })
    
    test("Should test if your name placeholder is rendered or not", () => {
        render(<Contact />)
    
        const yourName = screen.getByPlaceholderText("Your Name")
    
        expect(yourName).toBeInTheDocument();
    })

    test("Should check if all the input boxes are rendered or not", () => {
        render(<Contact />)

        const inputBoxes = screen.getAllByRole("textbox")

        expect(inputBoxes.length).toBe(3)
    })
});



