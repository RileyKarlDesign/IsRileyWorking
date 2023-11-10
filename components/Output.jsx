"use client";
import React from 'react'
import { useEffect, useState } from "react";

export default function Output({todayTemp}) {

    const [finishTime, setFinsihTime] = useState("");
    const [ startTime, setStartTime ] = useState("");
    const[ breakTime, SetBreakTime ] = useState("")

   useEffect(() => {

    if( todayTemp >=40 ){
        setFinsihTime('13:00');
        setStartTime ('7:00');
        SetBreakTime ( 'No Break')
    } 
    if(  todayTemp >= 35 ){

        setFinsihTime('13:45');
        setStartTime ('7:00');
        SetBreakTime ( 'No Break')

    } 
    if(  todayTemp >= 30 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( 'No Break')

    }
    if(  todayTemp >= 25 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( 'No Break')

    }
    if(  todayTemp >= 20 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( 'No Break')

    }
    if(  todayTemp >= 15 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( 'No Break')

    }
    if(  todayTemp >= 10 ){
 
        setFinsihTime('15:45');
        setStartTime ('7:30');
        SetBreakTime ( 'No Break')

    }
    if(  todayTemp >= 10 ){
 
        setFinsihTime('15:45')
        setStartTime ('7:30')
        SetBreakTime ( 'No Break')

    }
    if(  todayTemp >= 5 ){
 
        setFinsihTime('20:45')
        setStartTime ('9:30')
        SetBreakTime ( 'No Break')

    }
    console.log( todayTemp )
   
    
   }, [todayTemp])
   

  return (

    < div className='flex flex-col gap-2'> 


    <div className=' border-t-1 border-solid  w-full rounded-lg -md p-2
 bg-white  flex  shadow-lg   flex-col  '>
        <p className="w-[100px]    bg-red opacity-50 bold" > Tempature </p>    
        <h1 className=" w-full bold"> { !todayTemp ==""? (  `${todayTemp} °C` ):('')  }</h1>
    </div>



    <div className=" w-full rounded-lg -md p-2 bg-white shadow-lg flex  flex-col gap-[2px]  gap z-40">

     

    <div className= '   w-full   flex  border-t-1 border-solid border-black   '>
        <p className="w-[100px]  bg-red opacity-50 bold " > Start Time  </p>
        <p className='  pl-1 block w-full  pr-1   bg-yellow-200 '>{startTime}</p> 
      </div>

      <div className= ' w-full   flex  border-t-1 border-solid border-black  '>
        <p className="w-[100px]  bg-red opacity-50 bold" > Break  </p>
        <p className='pl-1 pr-1 w-full bg-blue-200 ' >{breakTime}</p> 
      </div>

      <div className= ' w-full   flex  border-t-1 border-solid border-black  '>
        <p className="w-[100px] bg-red opacity-50 bold" > Finsih Time  </p>
        <p className=' pl-1 pr-1  w-full  bg-green-200 ' >{finishTime}</p>
      </div>

    


    </div>

    </div>

  )
}
