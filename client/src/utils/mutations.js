import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql `
mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql `
mutation saveBook($userId: ID!, $bookData: BookInput!) {
    saveBook(userId: $userId, bookData: $bookData) {
      _id
      username
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;

export const DELETE_BOOK = gql `
mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      savedBooks {
        bookId
      }
    }
  }
`;