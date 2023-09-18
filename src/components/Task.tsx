//import React from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_TASK } from "../GraphQL/Mutation";

interface TaskProps {
  task: {
    _id: string;
    description: string;
    status: boolean;
    createdAt: number;
  };
}

interface Task {
  _id: string;
  description: string;
  status: boolean;
  createdAt: number;
}

function Task({ task }: TaskProps) {
  const [updateTask] = useMutation(UPDATE_TASK);

  const handleTaskCompletion = (task: Task) => {
    updateTask({
      variables: {
        id: task._id,
        status: true,
      },
    });
  };

  return (
    <div>
      <li className="" key={task._id}>
        {task.description} - {task.status ? "Terminée" : "En cours"}
        {task.status ? (
          ""
        ) : (
          <button
            className="border p-2"
            onClick={() => {
              handleTaskCompletion(task);
            }}
          >
            Valider
          </button>
        )}
      </li>
    </div>
  );
}

export default Task;
