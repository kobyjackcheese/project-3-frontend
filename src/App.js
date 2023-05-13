//Import route and our components
import "./index.css";
import { Routes, Route } from "react-router-dom";


function App() {
 

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About about={aboutInfo}/>} />
        <Route path="/projects" element={<Projects projects={projects}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
