import React, { useState } from "react";
import intelectoImage from "../../assets/INTELECTO_LOGO.png";
import usuarioImage from "../../assets/usuario.png";
export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <header className="flex items-center p-1 bg-white border-b border-gray-800">
      <div className="flex items-center space-x-4">
        <img
          src={intelectoImage}
          alt="Logo de la Universidad"
          className="w-34 h-28 object-cover rounded-full px-8"
        />
        <div className="w-px h-20 bg-black "></div>
        <a href="#" className="text-red-500 text-lg px-16">
          {" "}
          Pagina Principal
        </a>
      </div>

      {!isLoggedIn && (
        <div className="ml-auto ">
          <a href="#" className="text-black text-lg">
            Inicar Sesión
          </a>
          <a
            href="#"
            className="text-red-500 text-lg border border-red-500 mx-7 px-8 py-2"
          >
            Registrar
          </a>
        </div>
      )}
      <nav>
        <ul className="flex space-x-4">
          {isLoggedIn && (
            <>
              <li>
                <a href="#" className="text-black text-lg">
                  Favorito
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-lg">
                  Mi lista de lectura
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-lg">
                  Historial
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
      {isLoggedIn && (
        <div className="ml-auto flex items-center space-x-4 pr-8">
          <img
            src={usuarioImage}
            alt="Logo de la Universidad"
            className="h-16 object-cover rounded-full px-0 mr-2"
          />

          <svg
            className="cursor-pointer"
            width="30"
            height="30"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9842 8.26312L18.6096 7.37484C19.8927 4.47473 19.8076 4.38854 19.5584 4.13698L17.9193 2.5355L17.7566 2.39844H17.5667C17.4665 2.39844 17.1676 2.39844 14.6759 3.52858L13.7588 3.15883C12.5736 0.220703 12.4521 0.220703 12.105 0.220703L9.79266 0.220703C9.44598 0.220703 9.31124 0.220315 8.212 3.1693L7.29889 3.54003C5.61505 2.82903 4.62753 2.4691 4.36103 2.4691L4.14243 2.47589L2.37932 4.20454C2.11179 4.45611 2.01843 4.54481 3.37512 7.40005L3.00181 8.28523C0 9.4457 0 9.55826 0 9.91334L0 12.1806C0 12.5363 0 12.6616 3.0119 13.7405L3.38514 14.6241C2.10222 17.5227 2.1884 17.6097 2.43764 17.8589L4.07681 19.4623L4.23987 19.6025H4.43066C4.52926 19.6025 4.82453 19.6025 7.31971 18.47L8.23515 18.8423C9.42057 21.78 9.54232 21.7793 9.89015 21.7793H12.2029C12.5565 21.7793 12.682 21.7793 13.7845 18.8318L14.7023 18.4607C16.3842 19.1719 17.3694 19.533 17.6343 19.533L17.8543 19.5268L19.631 17.7875C19.8837 17.5325 19.9722 17.4443 18.6231 14.6009L18.9938 13.715C21.9999 12.5533 21.9999 12.4314 21.9999 12.0843V9.81959C21.9996 9.46277 21.9996 9.33818 18.9842 8.26312ZM10.9994 14.7717C8.8789 14.7717 7.15226 13.0786 7.15226 10.9982C7.15226 8.91942 8.87897 7.22794 10.9994 7.22794C13.1188 7.22794 14.8418 8.91981 14.8418 10.9982C14.8414 13.0786 13.1184 14.7717 10.9994 14.7717Z"
              fill="black"
              fill-opacity="0.7"
            />
          </svg>
        </div>
      )}
    </header>
  );
}
