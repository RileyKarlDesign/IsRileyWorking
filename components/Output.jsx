"use client";
import React from 'react'
import { useEffect, useState } from "react";
// import { HeadingOne } from "./HeadingOne"

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
        SetBreakTime ( 'NA')

    }
    if(  todayTemp >= 20 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( 'NA')

    }
    if(  todayTemp >= 15 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( 'NA')

    }
    if(  todayTemp >= 10 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( 'NA')

    }
    if(  todayTemp >= 10 ){
 
        setFinsihTime('15:45')
        setStartTime ('7:30')
        SetBreakTime ( 'NA')

    }
    if(  todayTemp >= 5 ){
 
        setFinsihTime('20:45')
        setStartTime ('9:30')
        SetBreakTime ( 'NA')

    }
    console.log( todayTemp )
   
    
   }, [todayTemp])
   

  return (

    < div className='flex flex-col gap-2'> 

    {/* <HeadingOne text={'weather'} />  */}


    <div className=" w-full rounded-lg -md p-2 bg-neutral-700 shadow-lg flex  flex-col gap-[2px]  gap z-40">

        <div className=' border-t-1 border-solid  w-full rounded-lg -md p
    flex     '>
            <p className="w-[100px]    bg-red opacity-50 bold" > Tempature </p>    
            <h1 className=" w-full bold"> { !todayTemp ==""? (  `${todayTemp} °C` ):('')  }</h1>
        </div>
        <div className=' border-t-1 border-solid  w-full rounded-lg -md
    b  flex      '>
            <p className="w-[100px]    bg-red opacity-50 bold" > Feels Like </p>    
            <h1 className=" w-full bold"> { !feelsLike ==""? (  `${feelsLike} °C` ):('')  }</h1>
        </div>
        <div className=' border-t-1 border-solid  w-full rounded-lg -md
    b  flex      '>
            <p className="w-[100px]    bg-red opacity-50 bold" > Humitdity </p>    
            <h1 className=" w-full bold"> { !humidity ==""? (  `${humidity} %` ):('')  }</h1>
        </div>


    </div>


    <div className="flex gap-2">

   

    <div className=" w-full rounded-lg -md p-2 bg-neutral-700 shadow-lg flex gap-[2px]  gap z-40">


    <div className= '   w-full     border-t-1 border-solid border-black   '>
        <p className=" bg-red opacity-50 bold " > Start Time  </p>
        <h1 className='  text-[25px] font-light pl-1 block w-full  pr-1    '>{startTime}</h1> 
      </div>
    </div>

    <div className=" w-full rounded-lg -md p-2 bg-neutral-700 shadow-lg flex  flex-col gap-[2px]  gap z-40">


    <div className= ' w-full border-t-1 border-solid border-black  '>
        <p className="  bg-red opacity-50 bold" > Break  </p>
        <p className='pl-1 pr-1 w-full font-light text-[25px] ' >{breakTime}</p> 
      </div>

      </div>

      <div className= ' w-full  rounded-lg p-2 bg-neutral-700  border-t-1 border-solid border-black  '>
        <p className="  bg-red opacity-50 bold" > Finsih Time  </p>
        <p className=' pl-1 pr-1  font-light text-[25px]  w-full   ' >{finishTime}</p>
      </div>

      </div>



    </div>

  )
}
