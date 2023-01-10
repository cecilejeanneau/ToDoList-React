import {nanoid} from 'nanoid';

// Fake datas, to work on the ToDoList
export default {
    title : 'Courses de Noël',
    tasks : [
        { id: nanoid(), done: true, title: 'Nourrir le chat' },
        { id: nanoid(), done: false, title: 'Faire les courses' },
        { id: nanoid(), done: false, title: 'Cuire le chat' },
        { id: nanoid(), done: false, title: 'Emballer les cadeaux' },
        { id: nanoid(), done: false, title: 'Manger le chat' },
        { id: nanoid(), done: false, title: 'Boire le champagne' }
    ]
}