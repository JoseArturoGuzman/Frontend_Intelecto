import React from "react";
import { Header } from "../../components/general/header";
import { Banner } from "../../components/general/banner";
import { Home_banner } from "./home_components/home_banner";
import { Footer } from "../../components/general/footer";
export  function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Home_banner />
            <Footer />
        </div>
    )
}