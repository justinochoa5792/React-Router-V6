import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [cartIsEmpty] = useState(true);

  return (
    <div className="App">
      <nav>
        <h1>Clothing Company</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/test">Test</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/products/:id/*" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/test"
          element={
            <div>
              <h1>Test Page</h1>
              <p>This is a test page</p>
            </div>
          }
        />
        <Route path="/redirect" element={<Navigate to={"/products"} />} />
        <Route
          path="/checkout"
          element={
            cartIsEmpty ? (
              <Navigate to={"/products"} />
            ) : (
              <div>
                <p>Checkout</p>
              </div>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
