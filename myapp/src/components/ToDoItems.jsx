import React from 'react';
import styles from './styles/ToDoList.module.scss';
import ToDoItem from './ToDoItem';

function ToDoItems(props) {
    const tasks = props.tasks;
    // porps dans : ToDoItems(props)
    const remaining = tasks.filter(t => !t.done).length;

  return (
    <div>
        <p>Vous avez {remaining} tâches sur {tasks.length} à terminer</p>
        {tasks.map((task, index) => {
            return <ToDoItem onCheckbox={props.onCheckbox} onDelete={props.onDelete} task={task} key={task.id} />
        })}
        {/* <ToDoItem text="Nourrir le chat" /> */}
        {/* <ToDoItem text="Faire les courses" /> */}
        
    </div>
  );
}

export default ToDoItems;