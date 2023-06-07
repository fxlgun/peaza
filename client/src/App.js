import { useSelector } from "react-redux";
import AdminHome from "./pages/AdminHome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.pizzaUser.currentUser);

  const admin = user ? user.isAdmin : "";
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            admin ? (
              <AdminHome />
            ) : user ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/orders"
          element={user ? <Orders /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/pizza/:id"
          element={user ? <Product /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        />
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
