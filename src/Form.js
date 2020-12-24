
import React, { useState } from 'react'

import styled from 'styled-components'


const Form = ({ addTodos, allDeleteTodo }) => {
    const ThingsTodo = document.getElementById('ThingsTodo')
    const Hour = document.getElementById('hour')
    const [value, setValue] = useState('')
    const [hour, setHour] = useState('')



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
                    <form onSubmit={handleSubmit}>
                        <p>
                            今日やることを書いてください</p>
                        <input
                            type="text"
                            onChange={e => {
                                setValue(e.target.value)
                            }}
                            id='ThingsTodo'
                            autoComplete="off"
                            class="form-input"
                        />
                    </form>

                    <form onSubmit={handleSubmit}>
                        <p>制限時間を書いてください</p>
                        <input
                            type="text"
                            onChange={e => {
                                setHour(e.target.value)
                            }}
                            id='hour'
                            autoComplete="off"
                            class="form-input"
                        />
                        <span>時間</span>
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

const FORMSECTION = styled.section`
    position:relative;
    width:35%;
`

const FORMS = styled.section`
    padding:20px;
    border:3px solid;
    border-radius:10px;
    form{
        margin-top:20px;
        input{
            margin-top:10px;
        }
        span{
            margin-left:20px;
        }
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

const BUTTONS = styled.div`
    display:flex;
    justify-content:space-between;
    margin:30px 0 10px 0;
    button{
        font-weight:bold;
    }
    #addbutton{
        padding:10px;
    }
    #alldeletebutton{
        color:red;
    }
`



