import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./books/AddBook";
import EditBook from "./books/EditBook";
import ViewBook from "./books/ViewBook";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addbook" element={<AddBook />} />
          <Route exact path="/editbook/:id" element={<EditBook />} />
          <Route exact path="/viewbook/:id" element={<ViewBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
