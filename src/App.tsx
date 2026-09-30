import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ThemeWrapper from "./common/ThemeWrapper";
import Login from "./sections/admin/Login";
import Dashboard from "./sections/admin/Dashboard";
import Admin from "./sections/admin/Admin";

function App() {
  return (
    <>
      <ThemeWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </ThemeWrapper>
    </>
  );
}

export default App;