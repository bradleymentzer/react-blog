import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./NavBar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App"></div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles/:name" element={<ArticlePage />} />
        <Route path="/articles-list" element={<ArticlesListPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
