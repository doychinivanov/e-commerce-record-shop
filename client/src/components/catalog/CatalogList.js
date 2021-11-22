import { useQuery } from "@apollo/client";
import { Grid, Container, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

import { GET_ALL_RECORDS_FOR_LANDIN_GPAGE } from '../../graphql/queries';

import CatalogCard from "./CatalogCard";

const CatalogList = ({theme}) => {

    const { loading, error, data } = useQuery(GET_ALL_RECORDS_FOR_LANDIN_GPAGE);


    return (
        <div style={{ 'padding-top': 90, 'padding-bottom': 90, backgroundColor: theme.palette.background.primary }}>
            <Container fixed>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>

                    {loading
                        ?
                        <>
                            <Grid item xs={2} sm={4} md={3}>
                                <Box mt={5}>
                                    <Skeleton variant="rectangular" width={280} height={280} />
                                </Box>
                            </Grid>

                            <Grid item xs={2} sm={4} md={3}>
                                <Box mt={5}>
                                    <Skeleton variant="rectangular" width={280} height={280} />
                                </Box>
                            </Grid>

                            <Grid item xs={2} sm={4} md={3}>
                                <Box mt={5}>
                                    <Skeleton variant="rectangular" width={280} height={280} />
                                </Box>
                            </Grid>
                        </>
                        :
                        data.records.map(record => <CatalogCard key={record._id} theme={theme} record={record} />)
                    }

                </Grid >
            </Container>
        </div>
    );
}

export default CatalogList;