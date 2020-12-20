import React, { useState } from 'react'


const Form = ({ addTodos, allDeleteTodo }) => {
    const ThingsTodo = document.getElementById('ThingsTodo')
    const Hour = document.getElementById('hour')
    const [value, setValue] = useState('')
    const [hour, SetHour] = useState('')
    let counter = 0;

    const timerStart = () => {
        setInterval(() => {

            counter++;
            console.log(counter)

        }, 1000);
    }



    const handleSubmit = (e) => {

        e.preventDefault()
        if (!value) {
            alert('文字を入力してください')
        } else {
            timerStart()
            addTodos(value, hour, counter)
            ThingsTodo.value = ''
            Hour.value = ''
        }
        setValue('')
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <span>タスク</span>
                <input
                    type="text"
                    onChange={e => {
                        setValue(e.target.value)
                    }}
                    id='ThingsTodo'
                />
            </form>

            <form onSubmit={handleSubmit}>
                <p >残りあと</p>
                <input
                    type="text"
                    onChange={e => {
                        SetHour(e.target.value)
                    }}
                    id='hour'
                />
                <span>時間</span>
                <p>までにやる</p>
            </form>
            <button onClick={handleSubmit}>送信</button>
            <button onClick={allDeleteTodo}>全て削除</button>
        </>
    )
}

export default Form