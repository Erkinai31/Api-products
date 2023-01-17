import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../Products/Products";
import Store from "../Store/Store";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Store />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
