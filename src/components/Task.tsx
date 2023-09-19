//import React from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_TASK } from "../GraphQL/Mutation";

interface Task {
  _id: string;
  description: string;
  status: boolean;
  createdAt: number;
  tags: Array<{ _id: string; name: string; colorCode: string }>;
}
interface TaskProps {
  task: {
    _id: string;
    description: string;
    status: boolean;
    createdAt: number;
    tags: Array<{ _id: string; name: string; colorCode: string }>;
  };
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
      <li
        className="flex items-center justify-between border-b border-gray-300 py-2"
        key={task._id}
      >
        {task.description}
        <div className="flex space-x-2 mt-2">
          {task.tags.map((tag) => (
            <span
              key={tag._id}
              className={`px-2 py-1 text-black bg-${tag.colorCode}-500 rounded`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        {task.status ? (
          <p className="text-red-700 font-semibold">Terminé</p>
        ) : (
          <p className="text-green-700 font-semibold">En cours</p>
        )}
        {task.status ? (
          ""
        ) : (
          <button
            className="text-blue-500 hover:text-blue-700 ml-2 focus:outline-none"
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
