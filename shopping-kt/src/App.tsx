import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table1 from "./components/UserManagement";
import AddProductForm from "./components/AddProductForm";
import UserManagement from "./components/UserManagement";
import ProductCat from "./components/ProductCat";
import NewProd from "./pages/NewProd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductManagement from "./components/ProductManagement";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
      <Route path="/user" element={<UserManagement/>}/ >
        <Route path="/" element={<ProductManagement/>}/ >
        <Route path="/newprod" element={<NewProd/>}/ >
        <Route path="/categ" element={<ProductCat/>}/ >

      </Routes>
    </Router>
  );
}

export default App;
