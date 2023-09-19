import Form from "../components/Form";
import Task from "../components/Task";
import { GET_ALL_TASKS } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";

function Tasktodo() {
  const { data } = useQuery(GET_ALL_TASKS);

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

  // Je Sépare les tâches en cours des tâches terminées
  const tasksInProgress = sortedTasks?.filter((task: Task) => !task.status);

  //console.log(tasksInProgress);
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-center text-4xl mb-5">Tâches en cours</h1>
      {tasksInProgress?.length === 0 ? (
        <p className="text-center">Il n'y a aucune tâche en cours.</p>
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
