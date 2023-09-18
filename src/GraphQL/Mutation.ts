import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation createTask($description: String!) {
    createTask(description: $description) {
      _id
    }
  }
`;
