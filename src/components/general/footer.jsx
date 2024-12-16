import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white pt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-8">
        {/* Sección Izquierda */}
        <div className="md:w-1/3 mb-6 md:mb-0 mx-16">
          <h2 className="font-bold text-lg mb-2">INTEleCto</h2>
          <p className="text-base mb-4 leading-relaxed">
            INTEleCto, tu enclave digital de aprendizaje y exploración, ofrece
            acceso ilimitado a un diverso acervo de recursos académicos para
            enriquecer tu conocimiento.
          </p>
          <p className="text-base">Tel.: (809) 567-9271</p>
          <p className="text-base">
            Dirección: Avenida de Los Próceres #49, Los Jardines del Norte
            10602, Santo Domingo, República Dominicana
          </p>
        </div>

        {/* Sección Centro */}
        <div className="md:w-1/3 mb-6 md:mb-0 mx-16 ">
          <h3 className="font-bold text-lg mb-2">Adicional</h3>
          <ul className="space-y-5 text-base">
            <li>
              <a href="#" className="underline ">
                Licencia KOHA
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Accesibilidad
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Políticas de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Derechos de Autor y Uso de Contenidos
              </a>
            </li>
          </ul>
        </div>

        {/* Sección Derecha */}
        <div className="md:w-1/3 text-center md:text-center">
          <p className="text-base mb-4">
            En colaboración con el Instituto Tecnológico de Santo Domingo
            (INTEC)
          </p>
          <img
            src="/src/assets/intecLogo.png"
            alt="INTEC Logo"
            className="inline-block w-40 mb-2"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#171717] pb-4">
      <div className=" mt-6">
          <div className="container mx-auto flex md:flex-row justify-between items-center px-8 py-4">
            {/* Redes Sociales */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#"
                className="text-black hover:text-gray-400 bg-white p-2 rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-400 bg-white p-2 rounded-full"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-400 bg-white p-2 rounded-full"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Idiomas */}
            <div className="flex space-x-4 items-center">
              <button className="bg-red-600 text-white px-4 py-1 rounded-lg text-base">
                Español
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-base py-4 border-t border-gray-700">
          &copy; 2024 INTEleCto, Instituto Tecnológico de Santo Domingo, o sus
          afiliados.
        </div>
      </div>
    </footer>
  );
}
