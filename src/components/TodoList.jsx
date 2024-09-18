import React from 'react'

export default function TodoList() {
  let todos= [
    'SaturdayHackNight',
    'Godot',
    'Tinkerday'
  ]

  return(
    <ul>
        {
            todos.map((todo,todoIndex)=>{
            return(
                <li key={todoIndex}>{todo}</li>
            )
        })}
    </ul>
  )
}
