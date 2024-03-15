import React from 'react'
import { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoValue, setTodoValue] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoValue })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div className={`flex border-b border-black/10 px-3 py-2 rounded-lg shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? "bg-green-500/20" : "bg-white/0"}`}>
            <input type='checkbox' className='cursor-pointer' checked={todo.completed} onChange={toggleCompleted} />
            <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`} value={todoValue}
                readOnly={!isTodoEditable} onChange={(e) => setTodoValue(e.target.value)} />
            <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled: opacity-50'
                onClick={() => {
                    if (todo.completed) return
                    if (isTodoEditable) {
                        editTodo()
                    } else setIsTodoEditable((prev) => !prev)
                }}
                disabled={todo.completed}
            >{isTodoEditable ? "save" : "edit"}</button>
            <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-red-500/20 hover:bg-red-500/30 shrink-0' onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
    )
}

export default TodoItem