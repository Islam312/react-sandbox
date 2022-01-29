import React from 'react';

const TodoList = ({ todoData }) => {
  return (
      <div className="wrapperTodoList">
        <h1 style={{textAlign: 'center'}}>Список дел</h1>
        <ul className="listTodos">
          {todoData.map((todos) => {
            return (
              <li className="itemTodos" key={todos.id}>
                {todos.todosName}
              </li>
            );
          })}
        </ul>
      </div>
  );
};

export default TodoList;
