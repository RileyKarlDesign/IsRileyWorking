"use client";
import React from 'react'
import { useEffect, useState } from "react";
import { HeadingOne } from "./HeadingOne"

export default function Output({todayTemp, feelsLike, humidity }) {

    const [finishTime, setFinsihTime] = useState("");
    const [ startTime, setStartTime ] = useState("");
    const[ breakTime, SetBreakTime ] = useState("")

   useEffect(() => {

    if( todayTemp >=40 ){
        setFinsihTime('13:00');
        setStartTime ('7:00');
        SetBreakTime ( 'NA')
    } 
    if(  todayTemp >= 35 ){

        setFinsihTime('13:45');
        setStartTime ('7:00');
        SetBreakTime ( 'NA')

    } 
    if(  todayTemp >= 30 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( 'NA')

    }
    if(  todayTemp >= 25 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ('1hr')

    }
    if(  todayTemp >= 20 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( '1hr')

    }
    if(  todayTemp >= 15 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( '1hr')

    }
    if(  todayTemp >= 10 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( '1hr')

    }
    if(  todayTemp >= 10 ){
 
        setFinsihTime('15:45')
        setStartTime ('7:30')
        SetBreakTime ( '1hr')

    }
    if(  todayTemp >= 5 ){
 
        setFinsihTime('20:45')
        setStartTime ('9:30')
        SetBreakTime ( '1hr')

    }
    if(  todayTemp < 5 ){
 
        setFinsihTime('21:00')
        setStartTime ('10:30')
        SetBreakTime ( '1.5 hr')

    }

    console.log( todayTemp )
   
    
   })
   

   console.log(startTime)

  return (

    < div className='flex flex-col gap-2'> 

    
        

    <div className=" w-full rounded-lg -md p-3 card   shadow-lg flex  flex-col gap-2 gap z-40">

        <div className=' bordert-1 border-solid  w-full rounded-lg flex     '>
            <p className="w-[130px]     bg-red opacity-50 bold" > Tempature </p>    
            <h1 className=" font-light w-full bold">{todayTemp} </h1>
        </div>
        <div className=' border-t-1 border-solid  w-full rounded-lg -md
    b  flex      '>
            <p className="w-[130px]     bg-red opacity-50 bold" > Feels Like </p>    
            <h1 className=" font-light w-full bold"> { !feelsLike ==""? (  `${feelsLike} °C` ):('')  }</h1>
        </div>
        <div className=' border-t-1 border-solid  w-full rounded-lg -md
    b  flex      '>
            <p className="w-[130px]     bg-red opacity-50 bold" > Humitdity </p>    
            <h1 className=" font-light w-full bold"> { !humidity ==""? (  `${humidity} %` ):('')  }</h1>
        </div>


    </div>


    <div className="flex gap-2">

   

    <div className=" w-full rounded-lg -md p-3 card    shadow-lg flex gap-[2px]  gap z-40">


    <div className= '   w-full  aspect-square  relative  border-t-1 border-solid border-black   '>
        <p className=" bg-red opacity-50 bold " > Start   </p>
        <h1 className='  absolute inset-0 flex justify-center items-center  font-light text-[55px] text-light pl-1  w-full  pr-1    '>{startTime}</h1> 
      </div>
    </div>

  

      <div className= ' w-full  rounded-lg p-3 card aspect-square relative  border-t-1 border-solid border-black  '>
        <p className="  bg-red opacity-50 bold" > Finish   </p>
        <h1 className=' absolute inset-0 flex justify-center items-center pl-1 pr-1 font-light   text-[55px] text-light w-full   ' >{finishTime}</h1>
      </div>

      </div>

      <div className="flex gap-2">

   

        

        <div className=" w-full rounded-lg -md p-3 card aspect-square relative shadow-lg flex  flex-col gap-[2px]   z-40">


        <div className= ' w-full border-t-1 border-solid border-black  '>
            <p className="  bg-red opacity-50 bold" > Break  </p>
            <h1 className=' absolute inset-0 flex justify-center items-center font-light pl-1 pr-1 w-full  text-[55px] text-light' >{breakTime}</h1> 
        </div>

        </div>
        <div className=" w-full rounded-lg -md p-3 card aspect-square   shadow-lg flex  flex-col gap-[2px]   z-40">


<div className= ' w-full border-t-1  p-[25px] relative border-solid border-black  '>
    <p className=" absolute top-0 left-0 opacity-50 bold" > Progress  </p>

    <div className="progress-bar   "  >
    <progress style={{'display': 'none' }}{...{'width': '0' }} {...{'height': '0'}} value="50" min="0" max="100"  >75%</progress>
    </div>

</div>

</div>
   

    </div>



    </div>

  )
}
