import React, { useState } from 'react'
import styled from 'styled-components'
import media from "styled-media-query";


const Form = ({ addTodos, allDeleteTodo }) => {
    const ThingsTodo = document.querySelector('#ThingsTodo')
    const Hour = document.querySelector('#hour')
    const [value, setValue] = useState('')
    const [hour, setHour] = useState('')


    //Form送信
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) {
            alert('文字が入力されてません。')
        } else {
            addTodos(value, hour)
            ThingsTodo.value = ''
            Hour.value = ''
        }
        setValue('')
    }


    return (
        <>
            <FORMSECTION>
                <TITLE>INPUT</TITLE>
                <FORMS>
                    <form onSubmit={handleSubmit} className="formsForm">
                        <p>
                            今日やることを書いてください</p>
                        <input
                            type="text"
                            onChange={e => {
                                setValue(e.target.value)
                            }}
                            id='ThingsTodo'
                            autoComplete="off"
                            className="form-input"
                        />
                    </form>

                    <form onSubmit={handleSubmit} className="formsForm">
                        <p>制限時間を書いてください</p>
                        <input
                            type="text"
                            onChange={e => {
                                setHour(e.target.value)
                            }}
                            id='hour'
                            autoComplete="off"
                            className="form-input"
                        />
                        <span id="time">時間</span>
                    </form>
                    <BUTTONS>
                        <button onClick={handleSubmit} id="addbutton">LISTを追加する</button>
                        <button onClick={allDeleteTodo} id="alldeletebutton">LISTを全て削除する</button>
                    </BUTTONS>
                </FORMS>
            </FORMSECTION>
        </>
    )
}

export default Form

//全体を囲む
const FORMSECTION = styled.section`
    position:relative;
    width:35%;
    ${media.lessThan("medium")`
    width:100%;
  `}
`

//formを囲む
const FORMS = styled.section`
    padding:20px;
    border:3px solid;
    border-radius:10px;
    .formsForm{
        margin-top:20px;
        .form-input{
            margin-top:10px;
        }
        #time{
            margin-left:20px;
        }
    }
    ${media.lessThan("medium")`
    padding:0;
    border:none;
  `}
    
`

//formtitle
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


//追加ボタン・全削除ボタン
const BUTTONS = styled.div`
    display:flex;
    justify-content:space-between;
    margin:30px 0 10px 0;
    button{
        font-weight:bold;
    }
    #addbutton{
        padding:10px;
        color:#fff;
        background-color:#4103ff;
        :hover{
        color:#4103ff;
        background-color:#fff;
        }
    }
    #alldeletebutton{
        padding:10px;
        color:red;
        background-color:#fff;
        :hover{
        color:#fff;
        background-color:red;
        }
    }
    ${media.between("medium", "large")`
    flex-direction:column;
    #alldeletebutton{
       margin-top:10px;
    }
  `}
`



