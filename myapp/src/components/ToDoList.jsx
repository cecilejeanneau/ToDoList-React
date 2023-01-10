import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoItems from './ToDoItems';
import fakeDatas from '../datas/toDos.js';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function ToDoList() {
  const [ToDoList, setToDoList] = useState(fakeDatas);

  function add(title) {
    
    ToDoList.tasks.push({
      id: nanoid(),
      done: false,
      title: title,
    });

    setToDoList(structuredClone(ToDoList));

    /* setTodolist({
      ...todolist,
      tasks: [
        ...todolist.tasks, // anciennes tâches + la nouvelle
        {
          id: nanoid(),
          done: false,
          title: title,
        },
      ],
    }); */
  }

  function onCheckbox(task) {
    const pos = ToDoList.tasks.findIndex(t => t.id === task.id);
    ToDoList.tasks.splice(pos, 1, task);
    setToDoList(structuredClone(ToDoList));
  }

  function onDelete(task) {
    const pos = ToDoList.tasks.findIndex(t => t.id === task.id);
    ToDoList.tasks.splice(pos, 1);
    setToDoList(structuredClone(ToDoList));
  }

  return (
    <div>
        <h1>{ToDoList.title}</h1>

        <ToDoForm onNewTask={add} />
        {/* <ToDoForm onNewTask={delete} /> */}
        <ToDoItems tasks={ToDoList.tasks} onDelete={onDelete} onCheckbox={onCheckbox} />
        
    </div>
  );
}

export default ToDoList;