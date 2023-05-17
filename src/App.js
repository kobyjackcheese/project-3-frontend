//Import route and our components
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import { useState, useEffect } from "react";
import { leaderboardLoader } from "./apiCalls";

function App() {
  const [leaderboardInfo, setLeaderboardInfo] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await leaderboardLoader();
        setLeaderboardInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLeaderboard();
  }, []);

  if (!leaderboardInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/leaderboard"
          element={<Leaderboard leaderboardInfo={leaderboardInfo} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
