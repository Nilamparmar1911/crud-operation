import React, { useState } from 'react';

function Todo() {
  const [todo, setTodo] = useState([]);
  const [inputvalue, setInputvalue] = useState("");

  // Handle input change
  function handleChange(e) {
    setInputvalue(e.target.value);
  }

  // Handle form submit
  function handlesubmit(e) {
    e.preventDefault();
    if (inputvalue.trim() === "") return; // ignore empty input
    setTodo([...todo, inputvalue]);       // add new item
    setInputvalue("");                    // clear input
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <form onSubmit={handlesubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter value"
          value={inputvalue}
          onChange={handleChange}
          className="border px-3 py-2 mr-2"
        /><br/><br/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </form>

      <ul className="list-disc pl-5">
        {todo.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
