import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ThemeWrapper from "./common/ThemeWrapper";



function App() {
  return (
    <>
      <ThemeWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeWrapper>
    </>
  );
}

export default App;