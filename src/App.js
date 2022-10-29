import React from "react";
import {Routes,Route} from 'react-router-dom'
import PageNotFound from "./Components/PageNotFound";
import SearchBox from "./Components/shared/SearchBox";
import Layout from "./Components/Layout";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/products/:id" element={<ProductDetails />}/>
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
  );
}

export default App;
