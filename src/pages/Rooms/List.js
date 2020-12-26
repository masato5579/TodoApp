import React from 'react'
import Item from './Item'


import styled from 'styled-components'


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


const LISTSECTION = styled.section`
    position:relative;
    width:60%;
`


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
`


const TITLE = styled.h2`
    position: absolute;
    top: -30px;
    left: -20px;
    z-index: 99;
    background-color: #5197AC;
    padding: 10px 30px;
`







