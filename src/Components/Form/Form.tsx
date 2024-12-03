import React, { ChangeEvent, FormEvent } from 'react'
import Input from '../Input/Input'
import { InputType } from '../Note/Note';
// formType
export interface FormType{
    inptValue:InputType;
    setValue:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=> void
    onSubmint:(e:FormEvent)=> void
}
// inputType
export interface InputComponent{
    inptValue:InputType;
    onHendelInput:(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=> void
}



function Form({inptValue,setValue,onSubmint}:FormType) {
  return (
    <>
      <form action="" className='flex flex-col items-center ' onSubmit={(e)=>onSubmint(e)} >
      <Input  inptValue={inptValue} onHendelInput={setValue}  />
      <button className='py-3 px-5 bg-cyan-400 rounded-md '>Submit</button>
      {/* hover:bg-white hover:text-cyan-400 */} 
      </form> 
    </>
  )
}

export default Form
