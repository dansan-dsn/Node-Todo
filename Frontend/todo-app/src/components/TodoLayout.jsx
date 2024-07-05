import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";

const TodoLayout = () => {
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState([]);

  // fetching todos
  useEffect(() => {
    axios
      .get("http://localhost:5005/todo/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5005/todo/remove/${id}`)
      .then(() => {
        setData(data.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleChecked = (id) => {
    const updatedCheckedTodos = checked.includes(id)
      ? checked.filter((todoId) => todoId !== id)
      : [...checked, id];

    setChecked(updatedCheckedTodos);
  };

  return (
    <div className="mt-10">
      <h2 className="text-center text-xl text-emerald-400">Your Todos</h2>
      {data.map((todo) => {
        return (
          <div
            className="bg-zinc-800 p-5 mx-5 md:mx-56 rounded mb-3"
            key={todo.id}
          >
            <div className="flex justify-between">
              <div>
                <input
                  type="checkbox"
                  className="mr-3"
                  onChange={() => handleChecked(todo.id)}
                />
                <span
                  className={
                    checked.includes(todo.id)
                      ? " line-through capitalize text-lg"
                      : "capitalize text-lg"
                  }
                >
                  {todo.title}
                </span>
              </div>
              <span
                className={
                  checked.includes(todo.id) ? "text-sm line-through" : "text-sm"
                }
              >
                {todo.info}
              </span>
              <div className="flex gap-3 ">
                <MdEdit
                  className="text-blue-600 cursor-pointer w-6 h-6 "
                  title="edit"
                />

                <MdDelete
                  className="text-red-800 cursor-pointer w-6 h-6"
                  title="delete"
                  onClick={() => handleDelete(todo.id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoLayout;
