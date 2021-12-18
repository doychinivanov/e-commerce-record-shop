// import { height } from '@mui/system';
import { useQuery } from '@apollo/client';
import { GET_NEWEST_RECORD_FOR_CAROUSEL } from '../../graphql/queries';
import Carousel from 'react-material-ui-carousel'

import CarouselItem from './CarouselItem';

const CarouselConveyer = ({theme}) => {

    const {data, loading} = useQuery(GET_NEWEST_RECORD_FOR_CAROUSEL);

    if(loading) return null;

    return (
        <div style={{marginTop: 56, textAlign: 'center', backgroundColor: theme.palette.background.primary}}>
            <h1 style={{paddingTop: 15, paddingBottom: 10, color: theme.palette.text.secondary}}>
                <span style={{borderBottom: `1px solid ${theme.palette.text.secondary}`}}>New Releases</span>
            </h1>
            <Carousel
            fullHeightHover={true}
            animation="fade"
            navButtonsProps={{
                style: {
                    borderRadius: 0,
                }
            }}
            >
                {
                    data?.getThreeNewestRecords.map(item => <CarouselItem key={item._id} item={item} theme={theme} />)
                }
            </Carousel>
        </div>
    )
}

export default CarouselConveyer;