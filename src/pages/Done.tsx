import { DELETE_TRUE_TASKS } from "../GraphQL/Mutation";
import Task from "../components/Task";
import { GET_ALL_TASKS } from "../GraphQL/Queries";
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

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

  const { data, refetch, loading, error } = useQuery(GET_ALL_TASKS);
  const [deleteTrueTasks] = useMutation(DELETE_TRUE_TASKS);

  const sortedTasks = data?.getAllTasks
    .slice()
    .sort((taskA: Task, taskB: Task) => {
      return taskB.createdAt - taskA.createdAt;
    });

  const completedTasks = sortedTasks?.filter((task: Task) => task.status);

  const handleDelete = () => {
    if (completedTasks.length > 0) {
      try {
        deleteTrueTasks();
        const successMessage =
          completedTasks.length > 1
            ? "Toutes les tâches ont été supprimées avec succès"
            : "La tâche a été supprimée avec succès";
        refetch();
        toast(successMessage, { type: "success" });
      } catch (error) {
        console.log("error", error);
        toast(`Echec : ${error}`, { type: "error" });
      }
    }
  };

  return (
    <section className="section">
      <h1>Tâches terminées</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && (
        <p className="text-center text-red-700">
          Nous rencontrons un problème de connection avec le serveur
        </p>
      )}
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
    </section>
  );
}

export default Taskdone;
