import "./App.scss";
import HeaderComponent from "./components/Header.js";
import TableUsersComponent from "./components/TableUsers.js";

function App() {
  return (
    <div className="app-container">
      <HeaderComponent />
      <TableUsersComponent />
    </div>
  );
}

export default App;
