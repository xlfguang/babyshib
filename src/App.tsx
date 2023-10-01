import "./App.css";
import Header from "./components/Header";
import Binance from "./pages/binance";
import Check from "./pages/check";
import Index from "./pages/index";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const loc = useLocation();
  console.log(loc);

  return (
    <>
      {loc.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Check />} />
        <Route path="/index" element={<Index />} />
        <Route path="/binance" element={<Binance />} />
      </Routes>

      <div></div>
    </>
  );
}

export default App;
