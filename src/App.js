import "./App.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer";
import SingUp from "./components/SignUp";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Add from "./components/Add.jsx";
import List from "./components/List.jsx";
import Update from "./components/Update.jsx";
import Cart from "./components/Cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from "./components/Private.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<List />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/update/:id" element={<Update />}></Route>
            <Route path="/logout" element={<h1>REMOVE USER</h1>}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SingUp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
