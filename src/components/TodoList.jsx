import React from 'react'
import TodoCards from './TodoCards'

export default function TodoList() {
  let todos= [
    'SaturdayHackNight',
    'Godot',
    'Tinkerday'
  ]

  return(
    <ul className='main'>
        {
            todos.map((todo,todoIndex)=>{
            return(
                <TodoCards key={todoIndex}>
                    <p>{todo}</p>
                </TodoCards>
            )
        })}
    </ul>
  )
}
