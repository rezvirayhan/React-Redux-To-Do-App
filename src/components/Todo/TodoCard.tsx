import { removeTask } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "./../../redux/hooks";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
};

const TodoCard = ({ title, description, id }: TTodoCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="bg-white rounded-xl flex justify-between p-5  border">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">{title}</p>
        {/* <p>Time</p> */}
        <p>{description} Revi</p>
        <div className="space-x-5 ">
          <Button
            onClick={() => dispatch(removeTask(id))}
            className="bg-red-800"
          >
            {" "}
            Delete
          </Button>
          <Button className="bg-blue-800"> Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
