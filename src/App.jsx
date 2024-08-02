import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import "./App.css";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Home />
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
