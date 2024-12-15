import React from "react";
import BackgroundHome  from "../../../assets/BackgroundHome.jpg";

export function Home_banner() {
  return (
    <div className="w-full">
      <img
        src={BackgroundHome}
        alt="Background"
        className="w-full h-[800px] object-cover opacity-15 "
      />
    </div>
  );
}
