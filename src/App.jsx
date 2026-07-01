import { Routes, Route } from "react-router-dom";

import Pages from "./Components/Pages";
import Catalog1 from "./Components/Products/Catalog1/Catalog1";
import Portfolio from "./Components/Porfolio/Portfolio/Portfolio";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      <Route path="/catalog1" element={<Catalog1 />} />
      <Route path="/catalog" element={<Portfolio />} />
    </Routes>
  );
};

export default App;