import{render,screen} from "@testing-library/react";
import Text from "./Text";
it('render',()=>{
render(<Text/>)
expect(screen.getByText("Welcome To APS")).toBeInTheDocument();
})
test("renders heading with provided text", () => {
    const customHeading = "Custom Heading Text";
    const { getByText } = render(<Text headingText={customHeading} />);
    const headingElement = getByText(customHeading);
    expect(headingElement).toBeInTheDocument();
  });