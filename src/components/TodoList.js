// TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
