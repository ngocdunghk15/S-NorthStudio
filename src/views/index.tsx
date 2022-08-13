import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LiveChat } from "~/components/app-components";
import { MainLayout } from "~/layouts";
import { HomePage } from "~/pages";

const GlobalViews = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/live" element={<MainLayout />}>
          <Route index element={<LiveChat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalViews;
