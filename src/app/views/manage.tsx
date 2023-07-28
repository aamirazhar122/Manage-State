"use client"
import { close } from "fs";
import {useState} from "react"
import React from 'react'

export default function Manage  () {
  
  const[step, setStep]=useState(0)
  const [showWindow,setshowWindow]=useState(true)
const handleClose =()=>{
  setshowWindow(false)
}

  const message:string[]=[

    "Next JS",
    "React Hook",
    "Manage State",

  ];


  return showWindow ? ( 


    <div className="bg-gray-300 h-100 rounded-md">
      <div className="flex justify-end">
<button onClick={handleClose}
className=" bg-blue-400 w-20 h-10 rounded-md ">close X</button>
</div>
      <div className="flex justify-between mt-10 text-center pt-1">
<div className={`${ 
  step>=1 ? "bg-red-500": "bg-blue-400" 
} border w-8 h-8 rounded-full pt-1`}
>
  1
  </div>
<div className={`${
  step >=2 ? "bg-red-500": "bg-blue-400"  
} border w-8 h-8 rounded-full pt-1`}
>
2
</div>
<div className={`${
  step >= 3 ? "bg-red-500":"bg-blue-400"
 } border w-8 h-8 rounded-full pt-1`}
 >
  3
  </div>
</div>

<div className="flex justify-center mt-40">{message[step-1]}</div>

<div className="flex justify-between mt-60 font-semibold">
<button onClick={()=>(step>1 ? setStep(step-1):"")} 
className="border bg-blue-400 w-20 h-10 rounded-md">Previous</button>
<button onClick={()=>(step<3 ? setStep(step+1): "")} 
className="border bg-blue-400 w-16 h-10 rounded-md">Next</button>

</div>
    </div>
  ):null;
};

