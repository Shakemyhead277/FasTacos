import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import './index.css';

export default function App() {
  return <HashRouter><div className="min-h-screen flex flex-col"><Navbar /><main className="flex-1"><Routes><Route path="/" element={<Home />} /><Route path="/menu" element={<Menu />} /><Route path="/contact" element={<Contact />} /></Routes></main><Footer /></div></HashRouter>;
}