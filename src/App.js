import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Profil from "./routes/profil";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Profil />} />
        </Routes>
    </Layout>
      </BrowserRouter>
  );
}

export default App;
