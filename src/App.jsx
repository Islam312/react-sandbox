import React, { useState } from 'react';
import Header from './components/Header';

import './styles/TodoList.css';

import './styles/App.css';
import TodoList from './components/TodoList';

const App = () => {
  const todoData = [
    {
      id: 1,
      todosName: 'todos item 1',
    },
    {
      id: 2,
      todosName: 'todos item 2',
    },
    {
      id: 3,
      todosName: 'todos item 3',
    },
    {
      id: 4,
      todosName: 'todos item 4',
    },
    {
      id: 5,
      todosName: 'todos item 5',
    },
  ];

  const [todos, setTodos] = useState(todoData);

  return (
    <div>
      <div className="container">
        <Header />
        <hr style={{ margin: '15px 0' }} />
        <form className='dFlex'>
          <input type="text" placeholder="Создать дело" className="myInput" />
          <button className='myButton'>Создать</button>
        </form>
        <hr style={{ margin: '15px 0' }} />
        <TodoList todoData={todos} />
      </div>
    </div>
  );
};

export default App;
