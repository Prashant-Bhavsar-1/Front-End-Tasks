import AddTodo from "./components/AddTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="w-full h-screen bg-gray-700 flex items-center flex-col gap-8">
      <h1 className="text-yellow-500 font-semibold text-4xl">
        Todo List using Redux Toolkit
      </h1>

      <AddTodo />

      <Todos />
    </div>
  );
}

export default App;
