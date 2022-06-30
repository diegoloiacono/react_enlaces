import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntriesPage from "./pages/EntriesPage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h2>Enlaces Web</h2>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<EntriesPage />} />
        </Routes>
      </main>
      <footer>
        <p>Diego Lo Iacono y Guillermo Valdéz</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
