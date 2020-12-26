import React from 'react'
import Timer from './Timer'
import Content from './Content'

import styled from 'styled-components'


const Item = ({ todo, changeIsDone, deleteTodo }) => {

    return (
        <LISTS>
            <section>
                <input type='checkbox' onChange={() => {
                    changeIsDone(todo.id)
                }} />
                <CONTENTS>
                    <h3>タスク:</h3>
                    <p style={
                        { textDecoration: todo.isDone ? 'line-through' : 'none' }
                    } id="todo-content">{todo.content}</p>
                </CONTENTS>
                <TIME>
                    <p>制限時間:<span>{todo.hour}</span>時間</p>
                    <Timer todo={todo} />
                </TIME>
                <Content></Content>
                <BUTTON>
                    <button onClick={() => { deleteTodo(todo.id) }}>このLISTを削除する</button>
                </BUTTON>
            </section>
        </LISTS>
    )
}


export default Item


const LISTS = styled.li`
    border:1px solid;
    background-color:#029BE1;
    margin:0 auto;
    padding:50px 0 30px 0;
    margin-top:50px;
    width:90%;
    section{
        width:90%;
        margin:0 auto;
        position:relative;
    }
    input{
        font-size:20px;
        transform:scale(4.0);
        position: absolute;
        left: -40px;
        top: -60px;
    }
`

const CONTENTS = styled.div`
    line-height:2.2rem;
    width:70%;
    margin:0 0 0 0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    #todo-content{
        font-size:1.2rem;
        width:70%;
        text-align:center;
        background-color:#fff;
        color:#029BE1;
        margin-left:10%;
    }
`

const TIME = styled.div`
    text-align:right;
    margin-top:10px;
`

const TEXT = styled.div`
    h3{

    }
    textarea{
        width:100%;
        margin-top:10px;
        min-height:300px;
    }
`

const BUTTON = styled.div`
    text-align:right;
    button{
        color:red;
        margin-top:20px;
        padding:10px;
        font-weight:bold;
    }
`

