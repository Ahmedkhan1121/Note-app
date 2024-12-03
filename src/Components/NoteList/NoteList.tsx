import React from 'react'
import { ListType } from '../Note/Note'

function NoteList({noteList}:{noteList:ListType[]}) {
  return (
    <ol className='font-bold'>
        {/* <li>ahmed</li>
        <li>Moiz</li>
        <li>ashar</li>
        <li>Anus</li>
        <li className='w-[400px] mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo perferendis molestiae asperiores amet obcaecati architecto odio nihil aperiam nulla saepe modi voluptatibus sint perspiciatis soluta tempora, aut repellendus dicta.</li> */}
        {
            noteList.map((e)=>{
                return(
                <div key={e.id}>
                 <li >{e.id}{e.inpt} </li>
                 <p className='whitespace-pre-wrap break-words w-[300px]' >{e.textAre}</p>
                 </div>
                )
            })
        }
    </ol>

  )
}

export default NoteList
