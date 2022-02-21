import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/Home";
import Header from "./pages/layout/Header";
function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer position="top-center" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
