
import { useState } from "react";

interface TaskInputProps {
  onAdd: (title: string) => void;
}

function TaskInput({ onAdd }: TaskInputProps) {
  const [title, setTitle] = useState<string>("");

  function handleAdd(): void {
    if (title.trim() === "") {
      return;
    }

    onAdd(title);
    setTitle("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TaskInput;
