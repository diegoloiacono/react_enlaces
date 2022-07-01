import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntriesPage from "./pages/EntriesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<EntriesPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
