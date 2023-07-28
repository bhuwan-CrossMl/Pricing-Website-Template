import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
