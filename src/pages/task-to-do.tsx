import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_TASKS } from "../GraphQL/Queries";
import { UPDATE_TASK } from "../GraphQL/Mutation";
import Form from "../components/Form";

function Tasktodo() {
  const { data } = useQuery(GET_ALL_TASKS);
  const [updateTask] = useMutation(UPDATE_TASK);

  const handleTaskCompletion = (task: Task) => {
    updateTask({
      variables: {
        id: task._id,
        status: true, // Mettre à jour le statut à "terminée"
      },
    });
  };

  interface Task {
    _id: string;
    description: string;
    status: boolean;
    createdAt: number;
  }

  const sortedTasks = data?.getAllTasks
    .slice()
    .sort((taskA: Task, taskB: Task) => {
      return taskB.createdAt - taskA.createdAt;
    });

  // Je Sépare les tâches en cours des tâches terminées
  const tasksInProgress = sortedTasks?.filter((task: Task) => !task.status);

  const completedTasks = sortedTasks?.filter((task: Task) => task.status);

  console.log(tasksInProgress);
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-center">Tâches en cours</h1>
      <h2>les tâches en cours</h2>
      <ul>
        {tasksInProgress?.map((task: Task) => (
          <li key={task._id}>
            {task.description} - {task.status ? "Terminée" : "En cours"}
            <button
              className="border p-2"
              onClick={() => {
                handleTaskCompletion(task);
              }}
            >
              tâche terminer ?
            </button>
          </li>
        ))}
      </ul>
      <h2>les tâches terminées</h2>

      <ul>
        {completedTasks?.map((task: Task) => (
          <li key={task._id}>
            {task.description} - {task.status ? "Terminée" : "En cours"}
          </li>
        ))}
      </ul>
      <Form />
    </section>
  );
}

export default Tasktodo;
