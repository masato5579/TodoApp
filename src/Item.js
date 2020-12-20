import React from 'react'

const Item = ({ todo, changeIsDone, deleteTodo }) => {

    return (
        <li>
            <input type='checkbox' onChange={() => {
                changeIsDone(todo.id)
            }} />
            <span style={
                { textDecoration: todo.isDone ? 'line-through' : 'none' }
            }>{todo.content}</span>
            <button onClick={() => { deleteTodo(todo.id) }}>削除</button>
            <p id="hour">残り{todo.hour}時間までに終わらせる</p>
            <p id="elapsedTime">経過時間{todo.counter}</p>
        </li>
    )
}


export default Item