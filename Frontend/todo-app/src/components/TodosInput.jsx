import React, { useState } from "react";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";

const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [msg, setMsg] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !info) {
      return setMsg("Please fill all the fields");
    }
    axios
      .post("http://localhost:5005/todo/create", {
        title,
        info,
      })
      .then(() => {
        setMsg("Todo Added successfully");
        setTitle("");
        setInfo("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {msg && <p className="text-teal-500 mx-5 md:mx-56">{msg}</p>}
      <form
        className="bg-neutral-700 p-5 mx-5 md:mx-56 cursor-pointer rounded"
        onSubmit={handleSubmit}
      >
        <label className=" justify-between flex cursor-pointer">
          Make Todos
          <span className="" onClick={handleToggle}>
            {isOpen ? (
              <TiMinus title="collapse" />
            ) : (
              <FaPlus title="Add Todo" />
            )}
          </span>
        </label>
        {isOpen && (
          <div className="flex flex-col justify-between mt-5 md:flex-row">
            <div className="mb-3">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="p-3 rounded outline-none p-holder"
              />
            </div>
            <div>
              <input
                type="text"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                placeholder="Content"
                className="p-3 rounded outline-none mb-3 p-holder"
              />
              <button type="submit" className="ml-3 btn btn-neutral">
                Add
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Todo;
