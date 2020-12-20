import React from 'react'
import Item from './Item'


const List = ({ todos, changeIsDone, deleteTodo }) => {
    return (
        <>
            <ul>
                {
                    todos.map((todo) => {
                        return (
                            <Item todo={todo} changeIsDone={changeIsDone} key={todo.id} deleteTodo={deleteTodo} />
                        )
                    })
                }
            </ul>
        </>
    )
}

export default List