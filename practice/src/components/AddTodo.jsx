import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo,removeTodo} from '../features/todo/todoSlice'
const AddTodo = () => {
    const[input,setInput]=useState('')
    const dispatch = useDispatch()

    const todoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div>
        <form action="" onSubmit={todoHandler}>
            <input type="text" placeholder='enter a todo' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
             <button type="submit">Add Todo</button>
            
        </form>
    </div>
  )
}

export default AddTodo