import { createSlice,nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    todos:[{id:1,text:"Hello Bhai"}]
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !=action.payload)
        },
        editTodo:(state,action)=>{}
        

    }
})

export const {addTodo,removeTodo,editTodo } = todoSlice.actions
export default todoSlice.reducer