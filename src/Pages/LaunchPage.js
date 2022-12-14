import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPage from "./NewPage";
import HomePage from "./HomePage";

export default function LaunchPage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="newpage" element={<NewPage />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
