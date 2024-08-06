import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between mb-5 mt-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-gray-700  w-full h-full rounded-xl p-5 space-y-3">
        <div className="space-y-2">
          {todos.map((item) => (
            <TodoCard
              key={item.id}
              title={item.title}
              description={item.description}
            ></TodoCard>
          ))}
        </div>
        {/* <div className="bg-white p-3 flex justify-center items-center font-semibold text-xl rounded-md">
          <p>There Is No Taks Panding</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
