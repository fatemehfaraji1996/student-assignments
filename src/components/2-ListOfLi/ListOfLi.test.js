import ListOfLi from "./components/2-ListOfLi/ListOfLi";
import{render,screen} from "@testing-library/react";

describe('ListOfLi Component', () => {
test('renders correct number of <li> elements', () => {
const  usernames = ["john", "sam", "jasem", "tom"]; 
render(<ListOfLi  usernames={ usernames} />); 
const listItems = screen.getAllByRole('listitem'); 
expect(listItems).toHaveLength( usernames.length); 
 });
    });