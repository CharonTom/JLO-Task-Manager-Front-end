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

export const GET_ALL_TAGS = gql`
  query getAllTags {
    getAllTags {
      _id
      name
      colorCode
    }
  }
`;
