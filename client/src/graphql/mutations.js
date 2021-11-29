import { gql } from "@apollo/client";

export const ADD_EMAIL_FOR_NEWSLETTER = gql`
    mutation AddEmailForNewsLetter($email: String!) {
        createNewsletterEmail(email: $email) {
            email: email
        }
    } 
`;

export const CREATE_REGULAR_USER = gql`
    mutation CreateRegularUser($email: String!, $fullName: String!) {
        createRegularUser(email: $email, fullName: $fullName) {
            _id
            email
            fullName
            imageUrl
            favorites {
                _id
            }
            cart {
                _id
            }
        }
    }
`;

export const ADD_TO_FAVORITES = gql`
    mutation AddRecordToFavorites($userId: ID!, $recordId: ID!) {
        addRecordToFavorites(userId: $userId,     recordId: $recordId) {
            fullName
            favorites {
                name
            }
        }
    }
`;