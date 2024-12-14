import React from "react";
import { NavLink } from "react-router-dom";

export function Error() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-center">
       
       
        {/* Título Principal */}
        <h1 className="mb-1 text-9xl font-extrabold text-red-700">
          404
        </h1>

        {/* Mensaje de Error */}
        <p className="mb-6 text-5xl font-bold text-black dark:text-white">
          Página no encontrada
        </p>

        {/* Descripción */}
        <p className="mb-8 text-2xl font-light text-black">
          Lo sentimos, la página que estás buscando no existe.
        </p>

        {/* Botón de Navegación */}
        <NavLink
          to="/"
          className="inline-block text-xl text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-8 py-4 text-center dark:focus:ring-red-900 my-6"
        >
          Volver a la página principal
        </NavLink>
      </div>
    </section>
  );
}
