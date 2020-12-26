import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";

import Content from './Content'
import Timer from './Timer'

const Item = ({ todo, changeIsDone, deleteTodo }) => {

    return (
        <ITEMSECTION>
            <section id="items-wrap">
                <input type='checkbox' id="check" onChange={() => {
                    changeIsDone(todo.id)
                }} />
                <TASK>
                    <h3>タスク:</h3>
                    <p style={
                        { textDecoration: todo.isDone ? 'line-through' : 'none' }
                    } id="todo-content">{todo.content}</p>
                </TASK>
                <TIME>
                    <p>制限時間:<span>{todo.hour}</span>時間</p>
                    <Timer todo={todo} />
                </TIME>
                <Content></Content>
                <BUTTON>
                    <button onClick={() => { deleteTodo(todo.id) }}>このLISTを削除する</button>
                </BUTTON>
            </section>
        </ITEMSECTION>
    )
}


export default Item

//全体を囲む
const ITEMSECTION = styled.li`
    border:1px solid;
    background-color:#029BE1;
    margin:0 auto;
    padding:50px 0 30px 0;
    margin-top:50px;
    width:90%;
    #items-wrap{
        width:90%;
        margin:0 auto;
        position:relative;
    }
    #check{
        font-size:20px;
        transform:scale(4.0);
        position: absolute;
        left: -40px;
        top: -60px;
    }
     ${media.lessThan("medium")`
    width:90%;
    #items-wrap{
        width:80%;
        margin:0 auto;
    }
    #check{
        font-size:20px;
        position: absolute;
        left: 45%;
        top: -60px;
    }
  `}
`
//タスク
const TASK = styled.div`
    line-height:2.2rem;
    width:100%;
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
    }
    ${media.lessThan("medium")`
        display:block;
        width:100%;
         #todo-content{
        width:100%;
        margin-left:0;
    }
  `}
`

//制限時間
const TIME = styled.div`
    text-align:right;
    margin-top:10px;
`

//削除ボタン
const BUTTON = styled.div`
    text-align:right;
    button{
        margin-top:20px;
        padding:10px;
        font-weight:bold;
        color:red;
        background-color:#fff;
        :hover{
        color:#fff;
        background-color:red;
    }
`

