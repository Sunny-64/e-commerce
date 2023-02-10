import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart"
import Register from "./components/Register"
import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
