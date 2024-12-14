import React from "react";
import { Header } from "../../components/general/header";
import { HomeBanner } from "./home_components/home_banner";
export  function Home() {
    return (
        <div>
            <Header />
            <HomeBanner />
        </div>
    )
}