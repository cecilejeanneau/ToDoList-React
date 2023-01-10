import React from 'react';
import { useState } from 'react';

function ToDoForm(props) {
    const [title, setTitle] = useState('');

    function updateField(event) {
        setTitle(event.target.value);
    }

    function sendData(event) {
        event.preventDefault(); // empêche le chargement

        props.onNewTask(title);
    }

  return (
    
    <form onSubmit={sendData}>
        <input type="text" onInput={updateField} placeholder='Votre tâche ...' />
        <button type='submit'>Ajouter</button>
    </form>
    
  );
}

export default ToDoForm;