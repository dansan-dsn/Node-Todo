import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const TodoLayout = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center text-xl text-emerald-400">Your Todos</h2>
      <div className="bg-zinc-800 p-5 mx-5 md:mx-56 rounded mb-3">
        <div className="flex justify-between">
          <div>
            <input type="checkbox" className="mr-3" />
            <span>Title</span>
          </div>
          <span>Content</span>
          <div className="flex gap-3 ">
            <MdEdit className="text-blue-600 cursor-pointer" title="edit" />
            <MdDelete className="text-red-800 cursor-pointer" title="delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoLayout;
