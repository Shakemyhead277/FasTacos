import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [{ label: 'Home', to: '/' }, { label: 'Menu', to: '/menu' }, { label: 'Contact', to: '/contact' }];
export default function Navbar() {
  const [open, setOpen] = useState(false); const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  return <header className="fixed inset-x-0 top-0 z-50 bg-[#C0392B] shadow-lg">
    <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
      <Link data-logo to="/" className="font-display min-w-0 truncate text-3xl text-white transition hover:text-yellow-300">🌮 FASTACOS</Link>
      <div className="hidden items-center gap-8 lg:flex">{links.map(l => <Link key={l.to} to={l.to} className="text-sm font-bold text-white transition hover:text-yellow-300">{l.label}</Link>)}<Link to="/contact" className="rounded-full bg-[#F39C12] px-6 py-2 font-bold text-stone-900 transition hover:scale-105">Order Now</Link></div>
      <button onClick={() => setOpen(v => !v)} className="rounded-lg p-2 text-white lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div className="border-t border-red-400 bg-[#C0392B] px-4 pb-5 lg:hidden">{links.map(l => <Link key={l.to} onClick={() => setOpen(false)} to={l.to} className="block border-b border-red-400 py-4 font-bold text-white hover:text-yellow-300">{l.label}</Link>)}<Link onClick={() => setOpen(false)} to="/contact" className="mt-4 block rounded-full bg-[#F39C12] px-6 py-3 text-center font-bold text-stone-900">Order Now</Link></div>}
  </header>;
}