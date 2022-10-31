import "./App.css";
import Signin from "./Views/signin";
import Signup from "./Views/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
