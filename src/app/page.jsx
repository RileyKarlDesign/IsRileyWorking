"use client";

import Image from "next/image";
import moment from "moment"
import BlurWindow from "../../components/BlurWindow";
import Output from "../../components/Output";
import SunDail from "../../components/SunDail";


import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const [day, setDay] = useState("");
  const [location, setLocation] = useState("");
  const [todayTemp, setTodayTemp] = useState("");

  const Dog ='bdaead23864f03f24c13ca2fe4c0670c'

  console.log(` long-> ${ moment() }`);

  function sortData(e) {
    console.log(e);
    // setLocation(e.location.name);
    setTodayTemp(e.main.temp);
  }
   

  function getDay(){

    if( moment().day() == 1 ){

      setDay('Monday')

    }else if( moment().day() == 2  ){
      setDay('Tuesday')
    }
    else if( moment().day() == 3  ){
      setDay('Wedenesday')
    }
    else if( moment().day() == 4  ){
      setDay('Thursday')
    }
    else if( moment().day() == 5  ){
      setDay('Friday')
    }
    else if( moment().day() == 6  ){
      setDay('Saturday')
    }
    else if( moment().day() == 7  ){
      setDay('Sunday')
    }


  }



  async function getWeatherData() {
    console.log('click');

    getDay()

    
    const options = { method: "GET", headers: { accept: "application/json" } };

    const serverResponce = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=0.1276&units=metric&appid=${Dog}`,
      options
    )
      .then((response) => response.json())
      .then((response) => sortData(response))

      .catch((err) => console.error(err));
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main className=' bg-red-500 h-screen flex flex-col relative gap-8 p-20 pl-4'>

      <h1 className="text-[10vw]  rotate-[5deg] absolute top-0 left-0  text-bold "> IsRileyWorking? </h1>

      <div className=" bg-gray-100 relative flex flex-col  rounded-md text-[10px] w-[300px] p-2 gap-4 shadow-2xl ">
    

   

    <div className="contnet flex flex-col gap-2 ">



     <div className=" bg-white shadow-lg rounded-lg p-2 flex flex-col gap-[2px]gap-[2px]  ">

      
      <div className= ' w-full    flex   '>
        <p className="w-[100px]  bg-red opacity-50 bold" > Location </p>
        <p className=" w-full ">London, United Kingdom </p>
      </div>

      <div className= ' w-full    flex   '>
        <p className="w-[100px]  bg-red opacity-50 bold" > Day </p>
        <p className=" w-full "> {day} </p>
      </div>

     
      
      </div>

      

    <div className="w-full">
    <Output  todayTemp={todayTemp} />
    </div>

    {/* <div className="w-full  rounded-lg  h-10 ">
    <SunDail  />
    </div> */}


    <button onClick={getWeatherData} className="bg-black text-white p-4 rounded">
      Get Answers
    </button>
     
      </div>

      


    </div>
      
    </main>
  );
}