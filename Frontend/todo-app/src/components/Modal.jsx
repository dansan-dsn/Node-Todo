import React, { useEffect, useState } from "react";
import axios from "axios";

const Modal = ({ onRequestClose, id }) => {
  const [data, setData] = useState([]);

  const todoUrl = "http://localhost:5001/todo";
  // useParams;
  useEffect(() => {
    axios
      .get(`${todoUrl}/_one/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    console.log(id);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${todoUrl}/update/${id}`, data[0])
      .then((res) => {
        console.log(res);
        onRequestClose();
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-neutral-700 rounded-lg p-6 mx-5">
          {data.map((todo) => {
            return (
              <form
                onSubmit={handleSubmit}
                key={todo.id}
                className="flex flex-col"
              >
                <h2 className="text-center text-orange-500 font-bold">
                  Update Todo
                </h2>
                <label htmlFor="title" className="">
                  Title
                  <input
                    value={todo.title}
                    type="text"
                    id="title"
                    name="title"
                    className="outline-none bg-neutral-600 p-3 m-2 rounded ml-9"
                    onChange={(e) =>
                      setData([{ ...data[0], title: e.target.value }])
                    }
                  />
                </label>
                <label htmlFor="content">
                  Content
                  <input
                    value={todo.info}
                    type="text"
                    name="info"
                    id="content"
                    className="outline-none bg-neutral-600 p-3 m-2 rounded"
                    onChange={(e) =>
                      setData([{ ...data[0], info: e.target.value }])
                    }
                  />
                </label>
                <div className="flex justify-between mt-3">
                  <button type="submit" className="btn btn-success">
                    Update
                  </button>
                  <button onClick={onRequestClose} className="btn btn-error">
                    Close
                  </button>
                </div>
              </form>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;

// onClick , display a modal....
// Modal has a form,
// and close modal on submission or
// close button incase no content...
