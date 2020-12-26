import React, { useState, useContext } from 'react'
import firebase from '../../config/firebase'
import Form from './Form'
import List from './List'

import { nanoid } from 'nanoid'

import styled from 'styled-components'

import { AuthContext } from '../../AuthService'


const Room = () => {


    const [todos, setTodos] = useState([
        {
            content: '宿題をやる',
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

    const user = useContext(AuthContext)


    return (
        <>
            <WRAP>
                <TITLE>『To-Do List With Timer』</TITLE>
                <p>{user.displayName}さん、こんにちは</p>
                <LOGOUT>
                    <button onClick={() => firebase.auth().signOut()}>ログアウトする</button>
                </LOGOUT>
                <FLEX>
                    <Form addTodos={addTodos} allDeleteTodo={allDeleteTodo} />
                    <List todos={todos} changeIsDone={changeIsDone} deleteTodo={deleteTodo} />
                </FLEX>
            </WRAP>
        </>
    )
}

export default Room

const WRAP = styled.section`
    padding:20px 0;
`

const FLEX = styled.div`
    display:flex;
    justify-content:space-between;
    width:95%;
    margin:0 auto;
    margin-top:50px;
    margin-bottom:50px;
`

const TITLE = styled.h1`
    text-align:center;
`

const LOGOUT = styled.div`
    text-align:right;
    width:90%;
    margin:0 auto;
    button{
        font-size:1rem;
        color:#fff;
        background-color:#4103ff;
        padding:5px 10px;
    }
`

