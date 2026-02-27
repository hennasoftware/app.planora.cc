import { BrowserRouter, Routes, Route } from "react-router-dom";

import InvalidRoutePage from "../pages/InvalidRoutePage.tsx";
import NoSlugPage from "../pages/NoSlugPage.tsx";
import RootPage from "../pages/RootPage.tsx";
import TripPage from "../pages/TripPage.tsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/trip" element={<NoSlugPage />} />
        <Route path="/trip/:slug" element={<TripPage />} />
        <Route path="*" element={<InvalidRoutePage />} />
      </Routes>
    </BrowserRouter>
  );
}
