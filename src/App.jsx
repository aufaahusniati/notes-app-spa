import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageWrapper from "./pages/HomePage";
import Navigation from "./components/Navigation";
import NotFoundPage from "./pages/NotFoundPage";
import DetailNotePageWrapper from "./pages/DetailNotePage";
import ArchivePageWrapper from "./pages/ArchivePage";
import AddNotePage from "./pages/AddNotePage";

function App() {
  return (
    <div className="app-container">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<NotFoundPage />}></Route>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/notes/:id" element={<DetailNotePageWrapper />} />
          <Route path="/archives" element={<ArchivePageWrapper />} />
          <Route path="/notes/new" element={<AddNotePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
