import React from "react";
import intelectoImage from "../../assets/INTELECTO_LOGO.png";

export function Header() {
  return (
    <header className="flex items-center p-1 bg-white border-b border-gray-800">
      <div className="flex items-center space-x-4">
        <img
          src={intelectoImage}
          alt="Logo de la Universidad"
          className="w-34 h-28 object-cover rounded-full px-8"
        />
      <div className="w-px h-20 bg-black "></div>
      <a href="#" className="text-red-500 text-lg px-16"> Pagina Principal</a>
      </div>

      <nav className="ml-auto">
        <ul className="flex space-x-4">
          
          <li>
            <a href="#" className="text-black text-lg">Inicar Sesión</a>
          </li>
          <li>
            <a href="#" className="text-red-500 text-lg border border-red-500 mx-7 px-8 py-2">Registrar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
