import TestWithMockData from "../components/TestWithMockData";
import { mockData } from "../App";
import { render,screen } from "@testing-library/react";

test("List render successfully",()=>{

    render(<TestWithMockData data={mockData}/>);

    let element = screen.getByText(/fletcher/i);
    expect(element).toBeInTheDocument();
})