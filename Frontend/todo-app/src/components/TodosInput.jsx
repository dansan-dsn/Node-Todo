import React, { useState } from "react";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";

const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-zinc-800 p-5 mx-5 md:mx-56 cursor-pointer rounded">
        <label
          className=" justify-between flex cursor-pointer"
          onClick={handleToggle}
        >
          Make Todos
          <span className="">{isOpen ? <TiMinus /> : <FaPlus />}</span>
        </label>
        {isOpen && (
          <div className="flex flex-col justify-between mt-5 md:flex-row">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Title"
                className="p-3 rounded outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Content"
                className="p-3 rounded outline-none mb-3"
              />
              <button type="submit" className="ml-3 btn btn-neutral">
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
