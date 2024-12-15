import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/home/home";
import {Login} from "./pages/login/Login";
import { Foro } from "./pages/foro/foro";
import { Historial } from "./pages/historial/historial";
import { Mi_lista_lectura } from "./pages/mi_lista_lectura/mi_lista_lectura";
import { Favoritos } from "./pages/favoritos/favoritos";
import { Registro } from "./pages/registro/registro";
import { Perfil } from "./pages/perfil/perfil";
import { Error } from "./pages/error/error";
import { Catalogo } from "./pages/catalogo/catalogo";
 export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home />
          } />
          <Route path="/login" element={
          <Login />
          } />
          <Route path="/foro" element={
          <Foro />
          } />
          <Route path="/historial" element={
          <Historial />
          } />
          <Route path="//mi-lista-de-lectura" element={
          <Mi_lista_lectura />
          } />
          <Route path="/favoritos" element={
          <Favoritos />
          } />
          <Route path="/registro" element={
          <Registro />
          } />
          <Route path="/perfil" element={
          <Perfil />
          } />
          <Route path="/*" element={
          <Error />
          } />
          <Route path="/catalogo" element={
          <Catalogo />
          }/>
        
      </Routes>
    </BrowserRouter>
  );
}