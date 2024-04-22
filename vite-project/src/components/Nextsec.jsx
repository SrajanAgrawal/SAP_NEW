import { Datepicker, Label } from 'flowbite-react'
import React, { useState } from 'react'
import  Select  from 'react-select'


const Nextsec = () => {

  const [value, setValue] = useState("")

  const options = [
    { value: "Online", label: "Online"},
    { value: "Offline", label: "Offline"},
    { value: "In-Person", label: "In-Person"},
  ]
  return (
    
    <form className='flex flex-row justify-between w-[60%] m-auto my-10'>

      {/*Mode Option*/}
      <div className='w-[30%]'>
        <Label htmlFor="Mode" value="Mode"/>
    <Select options={options} defaultValue={value} placeholder="Mode" onChange={setValue} />
   </div>
     

     {/*Filter by date */}
     <div className='w-[25%] '>
     <Label htmlFor="Filter By Date" value="Filter By Date " />
      <Datepicker/>
    
     </div>


    {/*Filter by ratings */}
    {/* <div className='w-[25%] '>
     <Label htmlFor="Filter By " value="Filter By Rating " />
         
     </div> */}

  </form>

  )
}

export default Nextsec
