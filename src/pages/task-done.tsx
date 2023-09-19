import { DELETE_TRUE_TASKS } from "../GraphQL/Mutation";
import Task from "../components/Task";

import { GET_ALL_TASKS } from "../GraphQL/Queries";
import { useQuery, useMutation } from "@apollo/client";

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

  const { data } = useQuery(GET_ALL_TASKS);
  const [deleteTrueTasks] = useMutation(DELETE_TRUE_TASKS, {
    refetchQueries: [{ query: GET_ALL_TASKS }],
  });

  const sortedTasks = data?.getAllTasks
    .slice()
    .sort((taskA: Task, taskB: Task) => {
      return taskB.createdAt - taskA.createdAt;
    });

  const completedTasks = sortedTasks?.filter((task: Task) => task.status);

  return (
    <section>
      <div className="container mx-auto py-10">
        <h1 className="text-center text-4xl mb-5">Tâches terminés</h1>
        {completedTasks?.length === 0 ? (
          <p className="text-center">Il n'y a aucune tâche de terminée.</p>
        ) : (
          <ul className="space-y-3">
            {completedTasks?.map((task: Task) => (
              <Task key={task._id} task={task} />
            ))}
          </ul>
        )}

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 mt-4 border rounded-lg disabled:bg-gray-300"
          onClick={() => {
            deleteTrueTasks();
          }}
          disabled={!completedTasks || completedTasks.length === 0}
        >
          Tout supprimer
        </button>
      </div>
    </section>
  );
}

export default Taskdone;
