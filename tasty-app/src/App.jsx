import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Onboarding from "./pages/Onboarding/Onboarding";
import Categories from "./pages/Categories/Categories";
import Areas from "./pages/Areas/Areas";
import Results from "./pages/Results/Results";
import Details from "./pages/Details/Details";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 3000);
  return (
    <>
      {" "}
      {loading ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/categories" element={<Categories />} />
            <Route path="/home/areas" element={<Areas />} />
            <Route path="/home/results" element={<Results />} />
            <Route path="/home/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}

export default App;
