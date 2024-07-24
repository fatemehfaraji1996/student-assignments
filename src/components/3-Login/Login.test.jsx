import { fireEvent } from "@testing-library/dom/dist/events";
import Login from "./Login";
import { render,screen } from "@testing-library/react";
describe('test',()=>{
    test('test boteen tobe dom',()=>{
        render(<Login/>)
        const button= screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
    test('test text login', () => {
        render(<Login/>)
        const buttons= screen.getByRole('button')
        expect(buttons).toHaveTextContent('login')
    })
    test('test onclick change text',()=>{
        render(<Login/>)
        const buttonss= screen.getByRole('button')
        fireEvent.click(buttonss);
        expect(buttonss).toHaveTextContent('logout')
    })
})