// import { height } from '@mui/system';
import { useQuery } from '@apollo/client';
import { GET_NEWEST_RECORD_FOR_CAROUSEL } from '../../graphql/queries';
import Carousel from 'react-material-ui-carousel'

import CarouselItem from './CarouselItem';

const CarouselConveyer = ({theme}) => {

    const {data, loading} = useQuery(GET_NEWEST_RECORD_FOR_CAROUSEL);

    console.log(data?.getThreeNewestRecords);

    if(loading) return null;

    const items = [
        {
            name: "Billie-Eilish",
            imageUrl: "https://billieeilish.it/wp-content/uploads/2021/04/Billie-Eilish-Nuovo-Album.png"
        },
        {
            name: "Little-Simz",
            imageUrl: "https://trackblasters.com/wp-content/uploads/2021/09/Little-Simz-Sometimes-I-Might-Be-Introvert-Album-Stream_featured_image.jpg"
        },
        {
            name: "Olivi Rodrigo",
            imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmix.com%2Fwp-content%2Fuploads%2F2021%2F05%2FOlivia-Rodrigo-Sour-Album-Artwork-billboard-1548-1621271558-768x433-1.jpg&f=1&nofb=1"
        }
    ]

    return (
        <div style={{marginTop: 64, textAlign: 'center', backgroundColor: theme.palette.background.primary}}>
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