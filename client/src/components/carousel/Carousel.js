import {useColorMode} from '../../contexts/ColorModeCtx'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const CarouselConveyer = (props) => {
    const {theme} = useColorMode();

    const items = [
        {
            name: "Billie-Eilish",
            description: "https://billieeilish.it/wp-content/uploads/2021/04/Billie-Eilish-Nuovo-Album.png"
        },
        {
            name: "Little-Simz",
            description: "https://trackblasters.com/wp-content/uploads/2021/09/Little-Simz-Sometimes-I-Might-Be-Introvert-Album-Stream_featured_image.jpg"
        },
        {
            name: "OBject 3",
            description: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmix.com%2Fwp-content%2Fuploads%2F2021%2F05%2FOlivia-Rodrigo-Sour-Album-Artwork-billboard-1548-1621271558-768x433-1.jpg&f=1&nofb=1"
        }
    ]

    return (
        <div style={{marginTop: 64, textAlign: 'center', backgroundColor: theme.palette.background.primary}}>
            <h1 style={{paddingTop: 15, paddingBottom: 10, color: theme.palette.text.secondary}}>New Releases</h1>
            <Carousel fullHeightHover={false} animation="fade">
                {
                    items.map((item, i) => <CarouselItem key={i} item={item} theme={theme} />)
                }
            </Carousel>
        </div>
    )
}

const CarouselItem = (props) => {
    return (
        <Paper style={{ 'textAlign': 'center'}}>
            <img style={{maxHeight: 420}} src={props.item.description} alt="Album Cover" />
            <h2 style={{color: props.theme.palette.text.secondary}} >{props.item.name}</h2>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default CarouselConveyer;