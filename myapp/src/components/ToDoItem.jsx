import React from 'react';
import styles from './styles/ToDoList.module.scss';

function ToDoItem(props) {
    const {id, title, done} = props.task;
    
    function onCheck(event) {
        props.onCheckbox({
            id,
            title,
            done: event.target.checked
        });
    }

    function onDelete() {
        props.onDelete(props.task);
    }

    return (
    
        <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={done} onChange={onCheck}/>
            <p>{title}</p>
            <button title="Delete" onClick={onDelete}>X</button>
        </label>
    
    );
}

export default ToDoItem;