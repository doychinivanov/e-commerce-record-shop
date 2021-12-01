import { Paper, Button } from '@mui/material'

const CarouselItem = (props) => {
    return (
        <Paper style={{ 'textAlign': 'center'}}>
            <img style={{maxHeight: 420, maxWidth: '100%'}} src={props.item.imageUrl} alt="Album Cover" />
            <h2 style={{color: props.theme.palette.text.secondary}} >{props.item.name}</h2>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default CarouselItem;