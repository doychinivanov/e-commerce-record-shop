import { useQuery } from "@apollo/client";
import { GET_PRODUCT_INFO_FOR_DETAILS } from '../../graphql/queries';

const ProductDetails = ({id}) => {

    const { loading, error, data } = useQuery(GET_PRODUCT_INFO_FOR_DETAILS, {variables: {recordId: id}});

    if(loading) {
        return null;
    }

    if(error) {
        alert(error.message);
    }

    return (
        <h1>{data.record.name} by {data.record.creatorArtist}</h1>
    )
}

export default ProductDetails;