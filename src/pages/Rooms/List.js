import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import Item from './Item'

const List = ({ todos, changeIsDone, deleteTodo }) => {
    return (
        <>
            <LISTSECTION>
                <TITLE>LIST</TITLE>
                <LIST>
                    <ul id='listUl'>
                        {
                            todos.map((todo) => {
                                return (
                                    <Item todo={todo} changeIsDone={changeIsDone} key={todo.id} deleteTodo={deleteTodo} />
                                )
                            })
                        }
                    </ul>
                </LIST>
            </LISTSECTION>
        </>
    )
}

export default List

//全体を囲む
const LISTSECTION = styled.section`
    position:relative;
    width:60%;
    ${media.lessThan("medium")`
    width:100%;
    margin-top:50px;
    `}
`

//Listエリア
const LIST = styled.section`
    padding:20px;
    border:3px solid;
    border-radius:10px;
    max-height:620px;
    overflow:scroll;
    #nolist{
        text-align: center;
        font-size:1.2rem;
    }
    ${media.lessThan("medium")`
    padding:0;
    border:none;
  `}
`

//Listというtitle
const TITLE = styled.h2`
    position: absolute;
    top: -30px;
    left: -20px;
    z-index: 99;
    background-color: #5197AC;
    padding: 10px 30px;
    ${media.lessThan("medium")`
    position: relative; 
    top:0;
    left:0;
    width: 20%;
    margin: 0 auto;
    text-align: center;
  `}
`







