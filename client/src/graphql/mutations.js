import { gql } from "@apollo/client";

export const ADD_EMAIL_FOR_NEWSLETTER = gql`
    mutation AddEmailForNewsLetter($email: String!) {
        createNewsletterEmail(email: $email) {
            email: email
        }
    } 
`;