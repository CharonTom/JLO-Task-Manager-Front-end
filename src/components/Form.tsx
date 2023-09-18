import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../GraphQL/Mutation";
import { useState, ChangeEvent } from "react";

function Form() {
  const initialValues = {
    description: "",
  };
  const [createTask] = useMutation(CREATE_TASK);

  const [formValues, setFormvalues] = useState(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };

  const handleForm = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className="main__form" onSubmit={handleForm}>
      <div className="main__form__input">
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={formValues.description}
        />
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
  );
}

export default Form;
