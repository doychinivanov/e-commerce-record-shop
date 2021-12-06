import { gql } from "@apollo/client";


export const GET_ALL_RECORDS_FOR_LANDIN_GPAGE = gql`
    query GetRecordsForLanding($category: String!, $query: String) {
        records(category: $category, query: $query) {
            category
            imageUrl
            _id
            year
            price
        }
}
`;

export const GET_PRODUCT_INFO_FOR_DETAILS = gql`
    query GetOneRecord($recordId: ID!) {
        record(id: $recordId) {
            _id
            name
            category
            creatorArtist,
            price,
            imageUrl,
            description
        }
    }
`;


export const GET_USER_BY_EMAIL = gql`
    query GetOneUser($email: String!) {
        user(email: $email) {
            _id
            email
            fullName
            imageUrl
            favorites {
                _id
                name
                imageUrl
                creatorArtist
                price
            }
            cart {
                _id
                quantity
                 record {
                    name
                    price
                    imageUrl
                    _id
                }
    }
        }
    }
`

export const GET_USER_CART = gql`
    query($userId: ID!){
        userCart(userId: $userId) {
            record {
                name
                creatorArtist
                price
                imageUrl
                _id
            }
            _id
            quantity
 } 
}
`;