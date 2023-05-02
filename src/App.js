import React from "react";

import "./App.css";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import FiltredProduct from "./components/FiltredProduct/FiltredProduct";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="/FiltredProduct/:type"
          element={<FiltredProduct />}
        ></Route>
        <Route path="/SingleProduct/:name" element={<SingleProduct />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
