import { gql } from "@apollo/client";


export const GET_ALL_RECORDS_FOR_LANDIN_GPAGE = gql`
    query GetRecordsForLanding {
        records {
            category
            imageUrl
            _id
        }
}
`;

export const GET_PRODUCT_INFO_FOR_DETAILS = gql`
    query GetOneRecord($recordId: ID!) {
        record(id: $recordId) {
            name
            category
            creatorArtist
        }
    }
`; 