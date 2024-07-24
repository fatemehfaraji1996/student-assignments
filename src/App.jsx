import "./App.css";
import ListOfLi from "./components/2-ListOfLi/ListOfLi";
import UserTable from "./components/6-UserTable/UserTable";

function App() {
  return (
    <div className="App">
      <UserTable />,
      <ListOfLi usernames={['ali','kiedecec']}/>
    </div>
  );
}

export default App;
