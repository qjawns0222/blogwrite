import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Buy from "./pages/Buy";
import Detail from "./pages/Detail";
import Form from "./Components/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/f" element={<Form />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Buy />} />
        <Route path="/detail:id" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
