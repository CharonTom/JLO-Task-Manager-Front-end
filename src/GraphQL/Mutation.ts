import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation createTask($description: String!) {
    createTask(description: $description) {
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

export const DELETE_TASK = gql`
  mutation deleTask($id: String!) {
    deleteTask(id: $_id) {
      _id
    }
  }
`;
