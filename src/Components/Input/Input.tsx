import React from 'react'
import { InputComponent } from '../Form/Form'
// input Import

function Input({inptValue,onHendelInput}:InputComponent) {
  return (
    <>
  
<div className='flex flex-col mt-[40px]  mb-[40px] gap-10'>
  
<input className='w-[400px] p-2  shadow-lg outline-none ' type="text" name="name" id="" placeholder='Enter Your Name' value={inptValue.name} onChange={(e)=>onHendelInput(e)}  />

<textarea className='w-[400px] shadow-lg  outline-none p-5' rows={8} name="profile" id="" placeholder='Enter Your Profile' value={inptValue.profile} onChange={(e)=>onHendelInput(e)}></textarea>

</div>
    </>
  )
}

export default Input
