import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/general/header";
import { Home } from "./pages/home/home";

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