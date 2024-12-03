"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Form from '../Form/Form'
import NoteList from '../NoteList/NoteList'
import exp from 'constants'
export interface ListType{
    inpt:string
    textAre:string
    id:number
}
export interface InputType{
    name:string;
    profile:string;

}

function Note() {

    // hooks usestate

    // input
    const [inputVAlue,setInputValue]=useState<InputType>({name:'',profile:''})
    // List
    const [list,setList]=useState<ListType[]>([])

    
    const generateId:number = list.length>0 ? Math.max(...list.map((e) => e.id))+1: 1;


    const onHandelSudmit=(e:FormEvent)=>{
        e.preventDefault()
        
            if(inputVAlue.name === ""  || inputVAlue.profile ==="" ){
                alert(
                    "plz fill the input"
                )
            }else{
                alert(
                    "your Note Create"
                ),
             setList((prev) => [...prev,{id:generateId,inpt:inputVAlue.name,textAre:inputVAlue.profile}]);
        
            }
            
            
    }
    const onHandleInput=(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        let {name,value} =e.target
        setInputValue((prev)=>({...prev,[name]:value}))
    }


  return (
    <>

        <section className='flex flex-col'>
        <Form  inptValue={inputVAlue} setValue={onHandleInput} onSubmint={onHandelSudmit} />
        <NoteList nodeList={list}  />
        </section>
     
    </>
  )
}


export default Note
