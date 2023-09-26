import { useState, ChangeEvent } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_TASK } from "../GraphQL/Mutation";
import { GET_ALL_TAGS, GET_ALL_TASKS } from "../GraphQL/Queries";
import Modale from "./Modale";

interface Tag {
  _id: string;
  colorCode: string;
  name: string;
}

function Form() {
  const { data } = useQuery(GET_ALL_TAGS); // On récupère les tags dans la DBB
  const { refetch } = useQuery(GET_ALL_TASKS); // On récupère les tags dans la DBB

  const initialValues = {
    description: "",
    tags: [] as string[],
  };

  const [formValues, setFormvalues] = useState(initialValues);
  const [error, setError] = useState<string | null>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [createTask] = useMutation(CREATE_TASK);

  const handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
    setError(null);
  };

  const handleTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (formValues.tags.includes(value)) {
      setFormvalues({
        ...formValues,
        tags: formValues.tags.filter((tag) => tag !== value),
      });
    } else {
      setFormvalues({
        ...formValues,
        tags: [...formValues.tags, value],
      });
    }
  };

  const handleForm = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.description.trim() === "") {
      setError("La description ne peut pas être vide.");
      return;
    }

    if (formValues.description.length > 60) {
      setError("La description ne peut pas dépasser 60 caractères.");
      return;
    }
    setFormvalues(initialValues);
    setError(null);
    setIsSubmit(true);
    setIsModalOpen(true);

    await createTask({
      variables: {
        description: formValues.description,
        tags: formValues.tags,
      },
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmit(false);
    refetch();
  };

  return (
    <div>
      <form
        className="mt-6 max-w-md mx-auto p-4 bg-skin-variant shadow-md rounded-lg"
        onSubmit={handleForm}
      >
        <h2 className="text-center">Ajouter une tâche</h2>
        <br />
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description :
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="description"
            id="description"
            placeholder="Entrez une description"
            onChange={handleDescChange}
            value={formValues.description}
          />
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Groupes :
          </label>
          <div className="space-y-2">
            {data?.getAllTags.map((tag: Tag) => (
              <label key={tag._id} className="flex items-center">
                <input
                  type="checkbox"
                  name="tags"
                  value={tag._id}
                  checked={formValues.tags.includes(tag._id)}
                  onChange={handleTagChange}
                  className="mr-2"
                />
                <span className="text-gray-700">{tag.name}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          disabled={!data}
          className="btn-blue py-2 px-4 disabled:bg-gray-300 "
        >
          Créer une tâche
        </button>
      </form>
      {isModalOpen && isSubmit && (
        <div>
          <Modale
            message="La tâche a bien été ajoutée !"
            onClose={handleCloseModal}
          />
        </div>
      )}
    </div>
  );
}

export default Form;
