import "./App.scss";
import HeaderComponent from "./components/Header.js";
import TableUsersComponent from "./components/TableUsers.js";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="app-container">
      <HeaderComponent />
      <Container>
        <TableUsersComponent />
      </Container>
    </div>
  );
}

export default App;
