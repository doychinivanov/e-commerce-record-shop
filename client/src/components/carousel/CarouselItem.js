import { Paper, Button } from '@mui/material'
import {Link} from 'react-router-dom';

const CarouselItem = (props) => {
    return (
        <Paper style={{ 'textAlign': 'center'}}>
            <Link to={`/products/${props.item._id}`}>
                <img style={{height: 420, maxWidth: '100%'}} src={props.item.imageUrl} alt="Album Cover" />
            </Link>

            <h2 style={{color: props.theme.palette.text.secondary}} >{props.item.creatorArtist}</h2>


            <Link to={`/products/${props.item._id}`}>
                <Button className="CheckButton">
                    Check it out!
                </Button>
            </Link>
        </Paper>
    )
}

export default CarouselItem;