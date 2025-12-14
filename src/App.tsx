import Header from './components/header/Header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Footer from './components/footer/Footer';
import Blog from './pages/Blog';

import { BrowserRouter, Routes, Route } from "react-router";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='aboutme' element={<AboutMe />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
