import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation createTask($description: String!, $tags: [ID]) {
    createTask(description: $description, tags: $tags) {
      _id
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($id: ID!, $status: Boolean!) {
    updateTask(id: $id, status: $status) {
      _id
      status
    }
  }
`;

export const DELETE_TRUE_TASKS = gql`
  mutation {
    deleteTrueTasks
  }
`;
