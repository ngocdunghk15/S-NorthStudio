import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from '~/layouts';
import {HomePage} from '~/pages';

const GlobalViews = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element = {<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default GlobalViews
