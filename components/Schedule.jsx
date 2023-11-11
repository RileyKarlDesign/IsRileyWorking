"use client";

import Image from "next/image";
import moment from "moment"
import BlurWindow from "./BlurWindow";
import Output from "./Output";
import SunDail from "./SunDail";


import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const [day, setDay] = useState("");
  const [location, setLocation] = useState("");
  const [todayTemp, setTodayTemp] = useState("");
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");


  const Dog ='bdaead23864f03f24c13ca2fe4c0670c'



  function sortData(e) {
    
    // setLocation(e.location.name);
    setTodayTemp(e.main.temp);
    setHumidity( e.main.humidity)
    setFeelsLike( e.main.feels_like)
    setSunRise( e.sys.sunrise)
    setSunSet( e.sys.sunset)

   
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

    getWeatherData()



  }, [todayTemp]);

  return  (
    <> 
          
            {todayTemp != "" ? (

          <div className="contnet flex flex-col gap-2 ">
        
         <h1 className="text-xl"> Data </h1>


          <div className=" card   wshadow-lg  p-3 flex flex-col gap-[2px]  ">

            
            <div className= ' w-full flex   '>
              <p className="w-[130px]  bg-red opacity-50 bold" > Location </p>
              <p className=" w-full ">London, United Kingdom </p>
            </div>

            <div className= ' w-full    flex   '>
              <p className="w-[130px]   bg-red opacity-50 bold" > Day </p>
              <p className=" w-full "> {day} </p>
            </div>

          
            
            </div>

            

          <div className="w-full">
          <Output  todayTemp={todayTemp} feelsLike={feelsLike} humidity={humidity} />
          </div>

          <div className="w-full  sundial rounded-full h-14">
          <SunDail sunRise={sunRise} sunSet={sunSet}/>
        
          </div>


          {/* <button onClick={getWeatherData} className=" p-3 rounded-md">
            Get Answers
          </button> */}
          
            </div>

                      ):( 

                        <div className=" card   wshadow-lg  p-3 flex flex-col gap-[2px]  ">

            
                        <div className= ' w-full flex   '>
                         
                          <p className=" w-full "> loading </p>
                        </div>
            
                      
            
                      
                        
                        </div>
          )}

</>
 
            


           
  );
}
