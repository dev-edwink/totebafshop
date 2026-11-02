
import Home from "./Pages/Home"
import { Routes, Route } from "react-router";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart"

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
