import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div>
      <div className="bg-white rounded-xl flex justify-between p-5  border">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">To Do Title</p>
        <p>Time</p>
        <p>Short Dis</p>
        <div className="space-x-5 ">
          <Button className="bg-red-800"> Delete</Button>
          <Button className="bg-blue-800"> Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
