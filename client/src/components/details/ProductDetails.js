import { useQuery } from "@apollo/client";
import { toast } from 'react-toastify';
import { GET_PRODUCT_INFO_FOR_DETAILS } from '../../graphql/queries';

import { Grid, Container, Box } from "@mui/material";

import ProductDetailsContent from './ProductDetailsContent';
import ProductDetailsLoading from './ProductDetailsLoading';

const ProductDetails = ({ id, theme }) => {
    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary;

    const { loading, error, data } = useQuery(GET_PRODUCT_INFO_FOR_DETAILS, { variables: { recordId: id } });

    if (error) {
        toast.error(error.message);
    }

    return (
        <div style={{ 'padding-top': 90, 'padding-bottom': 90, backgroundColor: theme.palette.background.primary, color: textColor }}>
            <Container fixed>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 8 }} alignItems="center">
                        {loading || error
                            ?
                            <ProductDetailsLoading />
                            :
                            <ProductDetailsContent theme={theme} data={data} />
                        }
                    </Grid>

                </Box>
            </Container>
        </div>
    )
}

export default ProductDetails;