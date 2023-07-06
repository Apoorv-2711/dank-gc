import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header({ isActiveNav, onButtonClick }) {
  return (
    <header className="flex h-10 justify-between items-center">
      <button type="button" title="menu" className="text-3xl" onClick={onButtonClick}>
        {isActiveNav ? <FaTimes /> : <FaBars />}
      </button>
      <h2 className="text-xl font-semibold text-center">Dank GC</h2>
      <ThemeToggleButton/>
    </header>
  );
}
