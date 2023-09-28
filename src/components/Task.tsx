import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_TASK } from "../GraphQL/Mutation";
import { GET_ALL_TASKS } from "../GraphQL/Queries";
import { toast } from "react-toastify";

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
  const [updateTask] = useMutation(UPDATE_TASK, {
    fetchPolicy: "no-cache", // La page se rafraichit automatiquement ce qui fait sauté la modale. Empécher le cache permet que la page ne se rafraichisse pas
  });

  const { refetch } = useQuery(GET_ALL_TASKS);

  const handleTaskCompletion = async (task: Task) => {
    try {
      await updateTask({
        variables: {
          id: task._id,
          status: true,
        },
      });
      refetch();
      toast("Tâche validée avec succès", { type: "success" });
    } catch (error) {
      console.log("error", error);
      toast(`Echec : ${error}`, { type: "error" });
    }
  };

  return (
    <>
      <li className="border-b border-black py-2 flex items-center justify-between">
        <div className="flex gap-x-6 items-center flex-wrap" key={task._id}>
          {task.description}
          <div className="flex flex-wrap gap-1 space-x-2 mt-2">
            {task.tags.map((tag) => (
              <span
                key={tag._id}
                style={{ backgroundColor: tag.colorCode }}
                className={`px-2 py-1 text-black text-xs lg:text-base rounded w-max`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          {task.status ? (
            <p className="text-red-700 font-semibold">Terminée</p>
          ) : (
            <p className="text-green-700 font-semibold w-max">En cours</p>
          )}
          {task.status ? (
            ""
          ) : (
            <button
              type="button"
              className="btn-blue lg:py-2 lg:px-4 py-1 px-2"
              onClick={() => {
                handleTaskCompletion(task);
              }}
            >
              Valider
            </button>
          )}
        </div>
      </li>
    </>
  );
}

export default Task;
