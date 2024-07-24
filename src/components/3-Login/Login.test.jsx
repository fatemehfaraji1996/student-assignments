import Login from "./Login";
import { render,screen } from "@testing-library/react";
// test('be', async () => {
//     render(<Login/>)
// //     const submitButton = screen.queryByText('boutten')
// // expect(submitButton).not.toBeInTheDocument()
//    expect()
// })
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
})