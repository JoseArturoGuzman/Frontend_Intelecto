import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/login/Login";
import {Header} from "./components/general/header";

 export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Header />
          } />
      </Routes>
    </BrowserRouter>
  );
}