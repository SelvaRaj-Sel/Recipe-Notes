import React, { useState, useEffect, useContext } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { useNavigate, useLocation } from "react-router";
import MainContext from "../context/MainContext";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { fav } = useContext(MainContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the homepage
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smart navigation: scroll on homepage, navigate on other pages
  const handleNav = (id, route = "/") => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(route);
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || menuOpen ? "bg-gray-900/95 backdrop-blur-md shadow-xl shadow-black/20" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div 
          className="text-white text-xl font-bold cursor-pointer hover:text-pink-300 transition-colors duration-300" 
          onClick={() => navigate("/")}
        >
          Recipe World
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center text-white text-sm font-medium">
          <button onClick={() => handleNav("hero", "/")} className="hover:text-pink-400 transition-colors duration-300 cursor-pointer">Home</button>
          <button onClick={() => handleNav("mainpages", "/")} className="hover:text-pink-400 transition-colors duration-300 cursor-pointer">Categories</button>
          <button onClick={() => handleNav("about", "/")} className="hover:text-pink-400 transition-colors duration-300 cursor-pointer">About</button>
          <button
            onClick={() => { navigate("/favorites"); setMenuOpen(false); }}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-pink-500/15 hover:border-pink-500/30 transition-all duration-300 cursor-pointer"
          >
            <GrFavorite className="text-pink-400" />
            <span>Favorites</span>
            {fav.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-pink-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/40">
                {fav.length}
              </span>
            )}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile fav badge */}
          <button
            onClick={() => navigate("/favorites")}
            className="relative text-white cursor-pointer"
          >
            <GrFavorite className="text-xl text-pink-400" />
            {fav.length > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-pink-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {fav.length}
              </span>
            )}
          </button>
          <button className="text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md flex flex-col p-6 gap-5 border-t border-white/10 text-white">
          <button onClick={() => handleNav("hero", "/")} className="text-left text-lg hover:text-pink-400 transition-colors cursor-pointer">Home</button>
          <button onClick={() => handleNav("mainpages", "/")} className="text-left text-lg hover:text-pink-400 transition-colors cursor-pointer">Categories</button>
          <button onClick={() => handleNav("about", "/")} className="text-left text-lg hover:text-pink-400 transition-colors cursor-pointer">About</button>
          <button
            onClick={() => { navigate("/favorites"); setMenuOpen(false); }}
            className="w-full bg-white/5 border border-white/10 p-3 rounded-xl flex justify-between items-center hover:bg-pink-500/15 hover:border-pink-500/30 transition-all duration-300 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <GrFavorite className="text-pink-400" /> Favorites
            </span>
            {fav.length > 0 && (
              <span className="bg-pink-500 px-2.5 py-0.5 rounded-full text-xs font-bold">
                {fav.length}
              </span>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;