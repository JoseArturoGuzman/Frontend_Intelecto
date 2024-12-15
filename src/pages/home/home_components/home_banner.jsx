import React from "react";
import BackgroundHome from "../../../assets/BackgroundHome.jpg";
import imgGirl from "../../../assets/img_girl.png";
import { NavLink } from "react-router-dom";

export function Home_banner() {
  return (
    <div className="relative w-full h-[800px] flex items-center justify-center border">
      {/* Fondo */}
      <img
        src={BackgroundHome}
        alt="Background"
        className="w-full h-full object-cover opacity-15"
      />

      {/* Contenido */}
      <div className="absolute flex items-center space-x-16 z-20 mx-16">
        <div className="flex flex-col">
          {/* Texto Paralelo */}
          <h1 className=" text-5xl font-bold text-red-600 text-left relative bottom-20">
            Consulta nuestro catálogo de la biblioteca disponible las 24 horas.
          </h1>
          <p className="text-xl text-left relative bottom-16">
          Nuestra plataforma web cuenta con repositorios de libros electrónicos
           almacenados en las bases de datos institucionales, revistas académicas y afiliados al INTEC.
          </p>
          <NavLink
            to="/catalogo"
            className="bg-red-600 text-white px-6 py-4 rounded-full font-semibold text-xl hover:bg-red-700 w-fit relative bottom-10 shadow-lg">
              Ver Libros
            </NavLink>
        </div>

        {/* Imagen */}
        <div className="relative flex-shrink-0 ">
          {/* Elipse de Fondo */}
          <div className="absolute -inset-0.5 w-[550px] h-[550px] bg-red-700 rounded-full  -z-10"></div>

          {/* Imagen Circular */}
          <img
            src={imgGirl}
            alt="Girl"
            className="w-[550px] h-[550px] object-cover rounded-full border-4 border-red-700 "
          />
        </div>
      </div>
    </div>
  );
}
