import React, { useState } from "react";
import loginImage from "../../assets/LOGIN_IMG.png";
import googleImage from "../../assets/icons8-google-480.png";
import intelectoImage from "../../assets/INTELECTO_LOGO.png";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row min-h-screen justify-center items-stretch">
      {/* Contenedor del Formulario */}
      <div className="flex-1 max-w-1/2 p-10 shadow-lg rounded-lg bg-white flex flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <img src={intelectoImage} alt="Logo de la Universidad" className="w-60 mx-auto" />
        </div>

        <form className="w-full max-w-md space-y-6">
          <div className="w-full">
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-3 text-lg border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="✉️0000000@intec.edu.do"
            />
          </div>

          <div className="w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full mt-1 p-3 text-lg border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="🔒•••••••••••••••"
            />
          </div>

          <div className="flex items-center">
            <button
              type="submit"
              className="w-full py-3 text-white bg-red-600 rounded-full text-lg font-semibold hover:bg-red-700"
            >
              Iniciar Sesión
            </button>
          </div>

          <div className="text-center mt-4">
            <a
              href="/recuperar-contrasena"
              className="text-red-500 hover:text-red-700 font-semibold text-lg underline"
            >
              ¿Has olvidado tu Contraseña?
            </a>
          </div>

          <div className="flex items-center justify-center mt-4 text-lg">
            <a
              href="/Registro"
              className="text-red-500 hover:text-red-700 font-semibold underline"
            >
              Regístrate
            </a>
          </div>

          <div className="flex items-center w-full">
            <div className="flex-1 h-0.5 bg-black"></div>
            <span className="mx-4 text-black text-sm">o</span>
            <div className="flex-1 h-0.5 bg-black"></div>
          </div>

          <div className="p-4 flex justify-center">
            <button className="w-full max-w-sm bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-red-500 rounded-full shadow flex items-center justify-center space-x-3">
              <img src={googleImage} alt="Google" className="w-8 h-8" />
              <span className="text-center">Continúa con tu cuenta de Google</span>
            </button>
          </div>
        </form>
      </div>

      {/* Contenedor de Imagen */}
      <div
        className="flex-1 max-w-1/2 shadow-lg brightness-75 overflow-hidden flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${loginImage})`,
        }}
      ></div>
    </section>
  );
}

export default Login;
