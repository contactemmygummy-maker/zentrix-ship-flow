import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TrackShipment from "./pages/TrackShipment";
import GetQuote from "./pages/GetQuote";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ChatButton from "./components/ChatButton";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/track" element={<TrackShipment />} />
            <Route path="/quote" element={<GetQuote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <ChatButton />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}

export default App;