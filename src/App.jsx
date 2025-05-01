import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Footer from "./components/footer/Footer.jsx";
import Ticket from "./pages/ticket/Ticket.jsx";
import Detail from "./pages/ticket/detail/Detail.jsx";
import Checkout from "./pages/ticket/checkout/Checkout.jsx";
import Invoice from "./pages/ticket/invoice/Invoice.jsx";
import Service from "./pages/busServices/Service.jsx";

function App() {
  return (
    <>
      <Router>
        <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
          {/* Navbar */}
          <Navbar />
          {/* Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/bus-tickets" element={<Ticket />} />
            <Route path="/bus-tickets/checkout" element={<Checkout />} />
            <Route path="/bus-tickets/payment" element={<Invoice />} />

            <Route path="/bus-tickets/detail" element={<Detail />} />
          </Routes>
          {/* Footer */}
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;
