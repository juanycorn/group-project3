import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($userName: String!, $email: String!, $password: String!) {
        login(userName: $userName, email: $email, password: $password!) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $userName: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            userName: $userName
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;