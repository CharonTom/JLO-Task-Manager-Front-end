import Form from "../components/Form";
import Task from "../components/Task";
import { GET_ALL_TASKS } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";

function Tasktodo() {
  const { data, loading, error } = useQuery(GET_ALL_TASKS);

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

  const sortedTasks = data?.getAllTasks
    .slice()
    .sort((taskA: Task, taskB: Task) => {
      return taskB.createdAt - taskA.createdAt;
    });

  const tasksInProgress = sortedTasks?.filter((task: Task) => !task.status);

  return (
    <section className="section">
      <h1>Tâches en cours</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && (
        <p className="text-center text-red-700">
          Nous rencontrons un problème de connection avec le serveur
        </p>
      )}
      {tasksInProgress?.length === 0 ? (
        <p className="text-center text-red-700">
          Il n'y a aucune tâche en cours.
        </p>
      ) : (
        <ul className="space-y-3">
          {tasksInProgress?.map((task: Task) => (
            <Task key={task._id} task={task} />
          ))}
        </ul>
      )}
      <Form />
    </section>
  );
}

export default Tasktodo;
