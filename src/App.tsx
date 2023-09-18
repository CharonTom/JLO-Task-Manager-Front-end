import { useMutation, useQuery } from "@apollo/client";
import "./App.css";
import { CREATE_TASK } from "./GraphQL/Mutation";
import { GET_ALL_TASKS } from "./GraphQL/Queries";
import { useState, ChangeEvent } from "react";

function App() {
  const initialValues = {
    description: "",
    // status: "",
  };
  const [createTask, { error }] = useMutation(CREATE_TASK);
  const { data } = useQuery(GET_ALL_TASKS);

  if (data) {
    console.log(data);
  }

  const [formValues, setFormvalues] = useState(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };

  const handleForm = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="main__form" onSubmit={handleForm}>
        <h1>Login</h1>

        <div className="main__form__input">
          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={handleChange}
            value={formValues.description}
          />
          {/* <input
            type="text"
            name="status"
            placeholder="status"
            onChange={handleChange}
            value={formValues.status}
          /> */}
        </div>

        <button
          className="button"
          onClick={() => {
            createTask({ variables: { description: formValues.description } });
          }}
        >
          Create a Task
        </button>
      </form>
    </>
  );
}

export default App;
