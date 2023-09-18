import { gql } from "@apollo/client";

export const GET_ALL_TASKS = gql`
  query getAllTasks {
    getAllTasks {
      _id
      description
      createdAt
      status
      tags {
        _id
        name
        colorCode
      }
    }
  }
`;
