import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/store'

import MainLayout from "./layouts/MainLayouts";
import About from "./pages/About";
import ListImages from "./pages/ListImages";
import OneImage from "./pages/OneImage";

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Routes>
          <Route path="/" element={ <ListImages /> } />
          <Route path="/images/:id" element={ <OneImage /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </MainLayout>
    </Provider>
  );
}

export default App;
