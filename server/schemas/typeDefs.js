const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
       _id: ID
       username: String
       email: String
       password: String
       savedBooks: [Book]
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String!
        image: String
        link: String
        title: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: [User]!
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(userId: ID!, bookData: Book!): User
        deleteBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;