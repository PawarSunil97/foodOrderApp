import { render,screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";

describe("contact us page test cases",()=>{

  it('should load contact us component',()=>{
     render(<Contact />)
     const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument()
  });
  it('should load button in the component',()=>{
     render(<Contact />)
    const button = screen.getByText("Submit")
    expect(button).toBeInTheDocument()
  });
  it('should load input name in the component',()=>{
    render(<Contact />)
    // Quarying
   const inputBox = screen.getAllByRole("textbox");
  //  assertion
   expect(inputBox.length).toBe(3)
  })
})