import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

const Product = lazy(() => import("./pages/ProductPage/ProductsPage"));
const Login = lazy(() => import("./pages/LoginPage"));

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = (user, token) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Layout user={user} token={token} onLogout={handleLogout} />
            }
          >
            <Route path="/" element={<Product />} />
          </Route>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
