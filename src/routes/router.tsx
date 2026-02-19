import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage.tsx";
import TripPage from "../pages/TripPage.tsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/trip/:slug" element={<TripPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
