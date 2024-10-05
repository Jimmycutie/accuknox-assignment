import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <div className="font-sans">
      <Router>
        <Navbar searchQuery={searchQuery} onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={<Dashboard searchQuery={searchQuery} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
