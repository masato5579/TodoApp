import React, { useState } from 'react'
import Form from './Form'

import List from './List'

import { nanoid } from 'nanoid'


const App = () => {


    const [todos, setTodos] = useState([
        {
            content: '朝起きる',
            hour: 2,
            id: nanoid(),
            isDone: false
        }
    ])





    const changeIsDone = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    }
                } else {
                    return todo
                }
            })
        )
    }

    const addTodos = (content, hour) => {
        setTodos(
            [
                ...todos, {
                    content: content,
                    hour: hour,
                    id: nanoid(),
                    isDone: false
                }
            ]
        )
    }


    const deleteTodo = id => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const allDeleteTodo = id => {
        setTodos(todos.filter((todo) => todo.id === id))
    }







    return (
        <>
            <h1>App </h1>
            <Form addTodos={addTodos} allDeleteTodo={allDeleteTodo} />
            <List todos={todos} changeIsDone={changeIsDone} deleteTodo={deleteTodo} />
        </>
    )
}

export default App