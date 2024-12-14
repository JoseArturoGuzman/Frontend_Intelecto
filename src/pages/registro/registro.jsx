import React, { useState } from "react";
import intelectoImage from "../../assets/INTELECTo_LOGO.png";
import googleImage from "../../assets/icons8-google-480.png";

export function Registro() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center">
        <img src={intelectoImage} alt="INTEleCto" className="w-56 my-2" />
        <h1 className="text-3xl font-bold text-center">
          ¡Regístrate ya y maximiza tu experiencia en INTEleCto!
        </h1>
        <span className="text-xl mt-4 text-center">
          Accede a descargas, reservas, reseñas, listas de lectura
          personalizadas, foros interactivos, historial completo y
          personalización de perfil.
        </span>
      </div>

      <section className="flex flex-col lg:flex-row justify-center items-center mt-10 space-x-8">
        
        {/* Formulario de Registro */}
        <div className="flex-1 max-w-lg p-8 rounded-lg bg-white flex flex-col items-center justify-start">
          <form className="w-full max-w-lg space-y-6 -mt-8">
            <div className="w-full">
              <input
                type="username"
                id="username"
                className="w-full mt-1 p-4 text-xl border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="👤Usuario"
              />
            </div>

            <div className="w-full">
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-4 text-xl border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="✉️0000000@intec.edu.do"
              />
            </div>

            <div className="w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full mt-1 p-4 text-xl border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="🔒Contraseña"
              />
            </div>

            <div className="w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full mt-1 p-4 text-xl border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="🔒Confirmar Contraseña"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="w-6 h-6 text-red-500 focus:ring-2 focus:ring-red-500"
              />
              <a href="#" className="text-lg underline text-red-600">
                He leído y acepto los términos y condiciones
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="newsletter"
                className="w-6 h-6 text-red-500 focus:ring-2 focus:ring-red-500"
              />
              <label htmlFor="newsletter" className="text-lg text-red-600">
                Deseo unirme al Newsletter
              </label>
            </div>

            <div className="flex items-center">
              <button
                type="submit"
                className="w-full py-4 text-white bg-red-600 rounded-full text-xl font-semibold hover:bg-red-700"
              >
                Registrarme
              </button>
            </div>
          </form>
        </div>

        {/* Línea Vertical Ajustada */}
        <div className="h-[500px] w-0.5 bg-black"></div>

        {/* Botón de Google */}
        <div className="p-4 flex justify-center items-center ml-8">
          <button className="w-full max-w-lg bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-6 border border-red-500 rounded-full shadow flex items-center justify-center space-x-4">
            <img src={googleImage} alt="Google" className="w-10 h-10" />
            <span className="text-center text-lg">
              Registrar con mi cuenta de Google
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
