import { fireEvent } from "@testing-library/dom/dist/events"
import LiveInput from "./LiveInput"
import{render,screen} from '@testing-library/react'
describe('testes',()=>{
    test('test input',()=>{
      render(<LiveInput/>)
    const placehplder= screen.getByPlaceholderText("Enter a text")
    expect(placehplder).toBeInTheDocument()
    })
    test('test h2',()=>{
        render(<LiveInput/>)
        const h2 = screen.getByRole('heading',{userid:8})
        expect(h2).toBeInTheDocument()
    })
    test('test change h2 text',()=>{
        render(<LiveInput/>)
        const placehplder= screen.getByPlaceholderText("Enter a text")
        fireEvent.change(placehplder,{target:{value:'789'}})
        const h2 = screen.getByRole('heading',{userid:8})
        expect(h2).toHaveTextContent('789')
    })
})