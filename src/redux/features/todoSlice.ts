import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type TTodo = {
  id: string;
  title: string;
  descptrion: string;
  isCompleted?: boolean;
};
type TTodoinitialstate = {
  todos: TTodo[];
};

const initialState: TTodoinitialstate = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, removeTask } = todoSlice.actions;

export default todoSlice.reducer;
