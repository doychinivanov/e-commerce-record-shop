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