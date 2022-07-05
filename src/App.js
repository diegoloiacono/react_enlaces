import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntriesPage from "./pages/EntriesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateEntryPage from "./pages/CreateEntryPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<EntriesPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/entries" element={<CreateEntryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <ToastContainer position="bottom-center" />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
