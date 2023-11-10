import React from 'react'
import moment from 'moment/moment';

export default function SunDail({fullTime}) {

    let dt = moment();
    let fullDt = dt.format("HH:mm") // 24 hour time

    console.log( fullDt )
    
   let timePercentage =  (parseInt(fullDt) / 24) * 100 

   console.log( timePercentage )

  return (
    <div className=' h-[100%] background-opacity-100 rounded-lg  bg-blue-400  overflow-hidden relative'>
        
    <div style={{'left': + timePercentage + '%'}} className="  absolute h-8 w-8 top-1 left-1 bg-yellow-300  drop-shadow-[#fcba03] -z-[-1] rounded-full  left-0 ">

    </div>





    </div>
  )
}
