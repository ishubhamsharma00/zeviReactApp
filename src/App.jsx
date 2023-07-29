import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import FilteredPage from "./components/FilteredPage";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/filteredPage' element={<FilteredPage/>}/>
    </Routes>

    </BrowserRouter>
   
  );
}

export default App;
