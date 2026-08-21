import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componenet/Header";

import Home from "./pages/Home";
import ServicesPage from "./pages/Servicespage";
import ServiceDetailPage from "./pages/Servicedetailpage";
import BookingPage from "./pages/Bookingpage";
import Contactsection from "./pages/Contactsection";
import NotFound from "./pages/pagesnotfound";

import BottomNavBar from "./componenet/Bottomnavbar";
import Chat from "./componenet/ChatWidget";

function App() {
  return (
    <BrowserRouter>
      {/* Fixed header appears on EVERY page */}
      <Header />

      {/* Main page content */}
      <main className="pt-[92px]">
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Services */}
          <Route
            path="/services"
            element={<ServicesPage />}
          />

          {/* Individual service */}
          <Route
            path="/services/:slug"
            element={<ServiceDetailPage />}
          />

          {/* Booking */}
          <Route
            path="/booking"
            element={<BookingPage />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contactsection />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      {/* Appears on every page */}
      <BottomNavBar />

      <Chat />
    </BrowserRouter>
  );
}

export default App;