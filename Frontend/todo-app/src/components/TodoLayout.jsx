import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";
import MyModal from "./Modal";

const TodoLayout = ({ filterSearch }) => {
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoDetails, setTodoDetails] = useState(0);
  // const [loading, setLoading] = useState(true);
  const [filterTodos, setFilterTodos] = useState([]);

  const todoUrl = "http://localhost:5005/todo";

  // fetching todos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${todoUrl}/all`);
        setData(res.data);
        setFilterTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Poll every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // filter todos based on search query
  useEffect(() => {
    if (!filterSearch) return setFilterTodos(data);

    const filteredTodos = data.filter((todo) =>
      todo.title.toLowerCase().includes(filterSearch.toLowerCase())
    );
    setFilterTodos(filteredTodos);
  }, [filterSearch, data]);

  // handle delete
  const handleDelete = (id) => {
    axios
      .delete(`${todoUrl}/remove/${id}`)
      .then(() => {
        const updatedData = data.filter((todo) => todo.id !== id);
        setData(updatedData);
        setFilterTodos(updatedData);
      })
      .catch((err) => console.log(err));
  };

  // handle update
  const handleUpdate = (todo) => {
    setIsModalOpen(true);
    setTodoDetails(todo);
  };

  // check the done todos
  const handleChecked = (id) => {
    const updatedCheckedTodos = checked.includes(id)
      ? checked.filter((todoId) => todoId !== id)
      : [...checked, id];

    setChecked(updatedCheckedTodos);
  };

  // control delay search with loading
  // if (loading)
  //   return (
  //     <button type="button" className="bg-indigo-500 items-center" disabled>
  //       <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
  //       Loading...
  //     </button>
  //   );

  return (
    <>
      <div className="mt-10">
        <h2 className="text-center text-xl font-extrabold text-amber-900">
          Your Todos
        </h2>
        {filterTodos.map((todo) => {
          return (
            <div
              className="bg-zinc-800 p-5 mx-5 md:mx-20 lg:mx-32 rounded mb-3"
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
                    checked.includes(todo.id)
                      ? "text-sm line-through"
                      : "text-sm"
                  }
                >
                  {todo.info}
                </span>
                <div className="flex gap-3 ">
                  <MdEdit
                    className="text-blue-600 cursor-pointer w-6 h-6 "
                    title="edit"
                    onClick={() => handleUpdate(todo.id)}
                  />
                  <MdDelete
                    className="text-rose-800 cursor-pointer w-6 h-6"
                    title="delete"
                    onClick={() => handleDelete(todo.id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <MyModal
          onRequestClose={() => setIsModalOpen(false)}
          id={todoDetails}
        />
      )}
    </>
  );
};

export default TodoLayout;
