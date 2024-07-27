import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
const Todos = () => {
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()
  return (
    <div>{
        todos.map((todo)=>(
            <div key={todo.id}>
                <p>{todo.text}</p>
                <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove todo</button>
        </div>
            
    ))}</div>
  )
}

export default Todos