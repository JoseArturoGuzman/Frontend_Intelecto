import React from "react";
import { Header } from "../../components/general/header";
import { Banner } from "../../components/general/banner";
import { Home_banner } from "./home_components/home_banner";
export  function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Home_banner />
        </div>
    )
}