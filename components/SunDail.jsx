import React from 'react'
import moment from 'moment/moment';
import { useEffect, useState } from "react";

export default function SunDail({sunRise, sunSet}) {


    const [riseOffSet, setRise] = useState("");
    const [setOffSet, setSet] = useState("");

    let dt = moment();
    let fullDt = dt.format("HH:mm") // 24 hour time 
    let timePercentage =  (parseInt(fullDt) / 24) * 100 


    function formatUnixTimeRise(e){

        let unix_timestamp = e;
    
          // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds
        var date = new Date(unix_timestamp * 1000);
    
        // Hours part from the timestamp
        var hours = date.getHours();
    
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
    
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
    
        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
        let final = (parseInt(formattedTime) / 24) * 100

        setRise(final);
        console.log( final)
        console.log( riseOffSet )
        
            
       }
    
       function formatUnixTimeSet(e){

        let unix_timestamp = e;
    
          // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds
        var date = new Date(unix_timestamp * 1000);
    
        // Hours part from the timestamp
        var hours = date.getHours();
    
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
    
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
    
        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
        let final = (parseInt(formattedTime) / 24) * 100

        setSet(final);
        
            
       }
      

useEffect(() => {

    
    formatUnixTimeRise(sunRise)
    formatUnixTimeSet(sunSet)
   
   console.log( ` from siun ${ riseOffSet }`)
    
    

}, [sunRise,sunSet])


   
  



 



   
  





  return (
    <div    className=' h-[100%] background-opacity-100 rounded-full bg-blue-500  shadow-inner-xl overflow-hidden relative'>

    
            
    {/* <div style={{background: `linear-gradient(90deg, rgba(0,33,93,0.9) ${riseOffSet  + '%'}, rgba(1,142,247,0) ${ setOffSet - riseOffSet  + '%'}, rgba(0,33,93,1)  ${setOffSet + '%'})` }} className=" inset-0 absolute  z-50 bg ">

    </div> */}

    <div style={{'right': +( 100 - riseOffSet)+ '%' }} className=" box-l left-0 absolute h-full blur-2xl top-0 bg-blue-950  drop-shadow-[#fcba03] z-[49]    ">
    </div>

    <div style={{'left': +( setOffSet)+ '%' }} className=" box-r  right-[-10px] la absolute h-full  top-0  bg-blue-950  drop-shadow-[#fcba03] z-[49]    ">
    </div>


    {/* <div style={{'left': + riseOffSet+ '%' }} className="  absolute h-full w-[1px] top-0  bg-white  drop-shadow-[#fcba03] z-[200] rounded-full   ">

    </div>

    <div style={{'left': + setOffSet + '%' }} className="  absolute h-full w-[1px] top-0  bg-white  drop-shadow-[#fcba03] z-[200] rounded-full   ">

</div> */}

    <div style={{'left': + timePercentage + '%'}} className="  absolute h-10 w-10 top-[8px] left-1 bg-yellow-400 drop-shadow-[#fcba03] z-[50] rounded-full   ">

    </div>





    </div>
  )
}
