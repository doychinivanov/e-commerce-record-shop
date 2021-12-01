import { useQuery } from "@apollo/client";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { Grid, Container, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

import { GET_ALL_RECORDS_FOR_LANDIN_GPAGE } from '../../graphql/queries';

import CatalogCard from "./CatalogCard";

const CatalogList = ({theme, user, handleOpen}) => {

    const { loading, error, data } = useQuery(GET_ALL_RECORDS_FOR_LANDIN_GPAGE);    


    if (error) {
        toast.error(error.message);
    }

    return (
        <div style={{ 'paddingTop': 90, 'paddingBottom': 90, backgroundColor: theme.palette.background.primary }}>
            <Container fixed>
                <Grid container spacing={{ xs: 2, md: 2,}} columns={{ xs: 2, sm: 8, md: 12 }}>

                    {loading || error
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
                        data.records.map(record => <CatalogCard
                            key={record._id}
                            theme={theme}
                            record={record}
                            userId={user?._id}
                            handleOpen={handleOpen}
                            userHasThisRecord={user?.favorites.find(x => x._id === record._id)}
                            />)
                    }

                </Grid >
            </Container>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      user: state.user
    }
}

export default connect(mapStateToProps)(CatalogList);