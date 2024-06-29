import Search from "../components/Search";
import TodoInput from "../components/TodosInput";
import TodoLayout from "../components/TodoLayout";

const Home = () => {
  return (
    <div>
      <div className="p-10 grid justify-center">
        <div>
          <h1 className="text-2xl capitalize mb-5 text-center  text-purple-700">
            Todo App
          </h1>
        </div>
        <Search />
      </div>
      <div className="">
        <TodoInput />
        <TodoLayout />
      </div>
    </div>
  );
};

export default Home;
