import React, { useState } from "react";
import ImgHomeBanner from "../../../assets/Home_bannerIMG.jpg";

export function HomeBanner() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <img
        src={ImgHomeBanner}
        alt="Background"
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center bg-black/10 ">
        {/* Botón de Catálogo */}
        
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-red-600 text-white px-4 py-2 rounded-bl-lg rounded-tl-lg hover:bg-red-700 focus:outline-none"
          >
            Catálogo de libros
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute left-0 top-full  w-40 bg-white border border-gray-300 rounded-tl rounded-bl-lg rounded-br shadow-lg">
              <ul className="py-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Libros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Artículos
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setOpen(false)}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Tesis
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpen(false)}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Investigaciones
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Input de Búsqueda */}
        <input
          type="text"
          placeholder="Buscar recursos..."
          className="w-1/2 px-4 py-2 rounded-br-lg rounded-tr-lg text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
    </div>
  );
}
