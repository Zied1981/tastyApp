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
import { SearchContext } from "./context/context";

function App() {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  setTimeout(() => {
    setLoading(true);
  }, 3000);
  return (
    <SearchContext.Provider value={{ searchItem, setSearchItem }}>
      {" "}
      {loading ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/results" element={<Results />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <SplashScreen />
      )}
    </SearchContext.Provider>
  );
}

export default App;
