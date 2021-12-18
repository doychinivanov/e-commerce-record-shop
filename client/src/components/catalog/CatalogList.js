import { useState, useEffect, useRef, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { Grid, Container, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

import { GET_ALL_RECORDS_FOR_LANDIN_GPAGE } from '../../graphql/queries';
import { useAuth } from '../../contexts/AuthCtx';

import CatalogCard from "./CatalogCard";
import CatalogAddNewCard from './CatalogAddNewCard';
import Filter from "../searchFilter/Filter";

const CatalogList = ({ theme, user, searchQuery }) => {
    const { userRole } = useAuth();

    const [records, setRecords] = useState([]);
    const [customLoading, setCustomLoading] = useState(true);

    const [category, setCategory] = useState('all');
    const [sortType, setSortType] = useState('');

    const [pageNumber, setPageNumber] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    const { loading, error, data  } = useQuery(GET_ALL_RECORDS_FOR_LANDIN_GPAGE, { variables: { category, query: searchQuery, pageNumber } });
    
    useEffect(() => {
        setCustomLoading(true);
        if(!loading) {
            setRecords(prevRecords => [...prevRecords, ...data.records]);
            setHasMore(data.records.length !== 0);
        }
        setCustomLoading(false);
    }, [data, loading]);

    useEffect(() => {
        setRecords([]);
        setPageNumber(1);
    }, [searchQuery]);
    
    if (!loading) {
        if (sortType === 'oldest') {
            records.sort((record1, record2) => record1.year - record2.year);
        } else if (sortType === 'newest') {
            records.sort((record1, record2) => record2.year - record1.year);
        } else if (sortType === 'cheap') {
            records.sort((record1, record2) => record1.price - record2.price);
        } else if (sortType === 'expensive') {
            records.sort((record1, record2) => record2.price - record1.price);
        }
    }
    
    const observer = useRef();
    const lastElementRef = useCallback(node => {
        if(loading) return;
        if(observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setPageNumber(previousPageNum => previousPageNum + 1);
            };
        });

        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    const handleCategoryChange = (event) => {
        setRecords([]);
        setPageNumber(1);
        setCategory(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortType(event.target.value);
    };

    const updateStateAfterDeleting = (recordId) => {
        setRecords(records.filter(x => x._id !== recordId));
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
                        {userRole === 'admin' ? <CatalogAddNewCard theme={theme} /> : null}

                        {
                            records.map((record, index) => (<CatalogCard
                            reference={records.length === index + 1 ? lastElementRef : undefined}
                            key={record._id}
                            theme={theme}
                            record={record}
                            userId={user?._id}
                            userRole={userRole}
                            userHasThisRecord={user?.favorites.find(x => x._id === record._id)}
                            refetchData={() => updateStateAfterDeleting(record._id)} />))
                        }

                        {loading || error || customLoading
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
                            null
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