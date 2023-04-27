import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Register from "./pages/Register";
import { BrowserRouter as Router, Navigate , Routes, Route } from "react-router-dom";

function App() {
  const user = 0;
  return (
    <Router>
      <Routes>
        <Route path="/" element={ user ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login/>} />
        <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register/>} />
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//
//   );
// }
