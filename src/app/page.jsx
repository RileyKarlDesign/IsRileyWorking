"use client";

import React from "react";
import Schedule from "../../components/Schedule";
import Header from "../../components/Header";
import Info from "../../components/Info";
import { useState } from "react";
import Footer from "../../components/Footer";

export default function page() {
  const [mode, setMode] = useState(1);
  return (
    <main className=' bg-white h-screen overflow-scroll  text-neutral-300 flex flex-col relative gap-8 sm:p-4  sm:pb-12 sm:pt-20 p-0  pt-20'>
      <h1 className=' text-[12vw] fixed text-black rotate-[5deg]  top-0 left-0  text-bold '>
        {" "}
        IsRileyWorking?{" "}
      </h1>

      <div className=' main-card  relative flex flex-col   sm:pt-16  pt-16  border-neutral-900 border-2 rounded-xl text-[15px] sm:w-[400px] w-full  sm:p-3  p-4   shadow-2xl '>
        <Header setMode={setMode} mode={mode} />

        { mode == 1 ?(

            <Schedule />

        ):(

            <Info/> 

        ) }

        <Footer/> 
        
      </div>

    </main>
  );
}
