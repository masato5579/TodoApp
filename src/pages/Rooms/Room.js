import React, { useState, useContext } from 'react'
import { nanoid } from 'nanoid'
import firebase from '../../config/firebase'
import { AuthContext } from '../../AuthService'

import styled from 'styled-components'
import media from "styled-media-query";


import Form from './Form'
import List from './List'

const Room = () => {

    const user = useContext(AuthContext)

    //やること配列
    const [todos, setTodos] = useState([
        {
            content: '宿題をやる',
            hour: 2,
            id: nanoid(),
            isDone: false
        }
    ])

    //isDoneの切り替え
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


    //todosの追加
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



    //todosの削除
    const deleteTodo = id => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }


    //todosの全削除
    const allDeleteTodo = id => {
        setTodos(todos.filter((todo) => todo.id === id))
    }


    //ログインユーザーの取得


    console.log('Roomの中')
    console.log(user.displayName)

    return (
        <>
            <WRAP>
                <TITLE>『To-Do List With Timer』</TITLE>
                <p id="user">ログインしているユーザー　：　「{user.displayName}」　さん</p>
                <LOGOUT>
                    <button onClick={() => firebase.auth().signOut()}>ログアウトする</button>
                </LOGOUT>
                <FLEX>
                    <Form addTodos={addTodos} allDeleteTodo={allDeleteTodo} />
                    <List todos={todos} changeIsDone={changeIsDone} deleteTodo={deleteTodo} />
                </FLEX>
                <PSLOGOUT>
                    <button onClick={() => firebase.auth().signOut()}>ログアウトする</button>
                </PSLOGOUT>
            </WRAP>
        </>
    )
}

export default Room


//全体を囲むwrap
const WRAP = styled.section`
    min-height:100vh;
    padding:20px 0;
    #user{
        width:95%;
        margin:0 auto;
        font-size:1.2rem;
        text-align:center;
    }
    ${media.lessThan("medium")`
    #user{
        font-size:1rem;
    }
  `}
`
//Formと、Listのflex
const FLEX = styled.div`
    display:flex;
    justify-content:space-between;
    width:95%;
    margin:0 auto;
    margin-top:50px;
    margin-bottom:50px;
    ${media.lessThan("medium")`
    display:block;
  `}
`

//title
const TITLE = styled.h1`
    text-align:center;
`

//ログアウトボタン
const LOGOUT = styled.div`
    text-align:right;
    width:90%;
    margin:0 auto;
    button{
        font-size:1rem;
        color:#fff;
        background-color:#4103ff;
        padding:5px 10px;
        font-weight:bold;
        :hover{
            background-color:#fff;
            color:#4103ff;
        }
    }
    ${media.lessThan("medium")`
    display:none;
  `}
`

const PSLOGOUT = styled.section`
    width:90%;
    margin:0 auto;
    text-align:right;
    display:none;
        button{
            font-size:1rem;
            color:#fff;
            background-color:#4103ff;
            padding:5px 10px;
            font-weight:bold;
            :hover{
                background-color:#fff;
                color:#4103ff;
            }
        }
    ${media.lessThan("medium")`
        display:block;
  `}

`

