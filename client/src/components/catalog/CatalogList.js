import { useState, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { Grid, Container, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

import { GET_ALL_RECORDS_FOR_LANDIN_GPAGE } from '../../graphql/queries';

import CatalogCard from "./CatalogCard";
import Filter from "../searchFilter/Filter";

const CatalogList = ({ theme, user, searchQuery }) => {
    const [category, setCategory] = useState('all');
    const [sortType, setSortType] = useState('');

    const { loading, error, data } = useQuery(GET_ALL_RECORDS_FOR_LANDIN_GPAGE, { variables: { category, query: searchQuery } });

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortType(event.target.value);
    };

    if (!loading) {
        if (sortType === 'oldest') {
            data.records.sort((record1, record2) => record1.year - record2.year);
        } else if (sortType === 'newest') {
            data.records.sort((record1, record2) => record2.year - record1.year);
        } else if (sortType === 'cheap') {
            data.records.sort((record1, record2) => record1.price - record2.price);
        } else if (sortType === 'expensive') {
            data.records.sort((record1, record2) => record2.price - record1.price);
        }
    }

    if (error) {
        toast.error(error.message);
    }

    return (
        <>
            <Filter theme={theme} category={category} sortType={sortType} handleCategoryChange={handleCategoryChange} handleSortChange={handleSortChange} />
            <div style={{ 'paddingTop': 90, 'paddingBottom': 90, backgroundColor: theme.palette.background.primary }}>
                <Container fixed>
                    <Grid container spacing={{ xs: 2, md: 2, lg: 2, xl: 2 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 8 }}>

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
                                userHasThisRecord={user?.favorites.find(x => x._id === record._id)}
                            />)
                        }

                    </Grid >
                </Container>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(CatalogList);