import React from 'react'
import Timer from './Timer'

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
            <Timer todo={todo} />
        </li>
    )
}


export default Item