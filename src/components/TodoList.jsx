import React from 'react'
import TodoCards from './TodoCards'

export default function TodoList(props) {
    const{todos}= props
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
