import { DELETE_TRUE_TASKS } from "../GraphQL/Mutation";
import Task from "../components/Task";
import { useState } from "react";
import { GET_ALL_TASKS } from "../GraphQL/Queries";
import { useQuery, useMutation } from "@apollo/client";
import Modale from "../components/Modale";

function Taskdone() {
  interface Task {
    _id: string;
    description: string;
    status: boolean;
    createdAt: number;
    tags: {
      _id: string;
      name: string;
      colorCode: string;
    }[];
  }

  const { data, refetch } = useQuery(GET_ALL_TASKS);
  const [deleteTrueTasks] = useMutation(DELETE_TRUE_TASKS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const sortedTasks = data?.getAllTasks
    .slice()
    .sort((taskA: Task, taskB: Task) => {
      return taskB.createdAt - taskA.createdAt;
    });

  const completedTasks = sortedTasks?.filter((task: Task) => task.status);

  const handleDelete = () => {
    if (completedTasks.length > 0) {
      deleteTrueTasks();
      setIsSubmit(true);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmit(false);
    refetch();
  };

  return (
    <section className="container mx-auto p-10">
      <h1 className="text-center text-4xl mb-5">Tâches terminées</h1>
      {completedTasks?.length === 0 ? (
        <p className="text-center text-red-700">
          Il n'y a aucune tâche de terminée.
        </p>
      ) : (
        <ul className="space-y-3">
          {completedTasks?.map((task: Task) => (
            <Task key={task._id} task={task} />
          ))}
        </ul>
      )}

      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 m-6 border rounded-lg disabled:bg-gray-300"
        onClick={handleDelete}
        disabled={!completedTasks || completedTasks.length === 0}
      >
        Tout supprimer
      </button>

      {isModalOpen && isSubmit && (
        <div>
          <Modale
            message="Les tâches terminées ont bien été supprimées !"
            onClose={handleCloseModal}
          />
        </div>
      )}
    </section>
  );
}

export default Taskdone;