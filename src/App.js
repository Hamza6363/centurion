import { useEffect, useState } from "react";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PageLoader from "./components/pageLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);



  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
