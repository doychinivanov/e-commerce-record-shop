// import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Example(props){
    const items = [
        {
            name: "Random Name #1",
            description: "https://billieeilish.it/wp-content/uploads/2021/04/Billie-Eilish-Nuovo-Album.png"
        },
        {
            name: "Random Name #2",
            description: "https://trackblasters.com/wp-content/uploads/2021/09/Little-Simz-Sometimes-I-Might-Be-Introvert-Album-Stream_featured_image.jpg"
        },
        {
            name: "OBject 3",
            description: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmix.com%2Fwp-content%2Fuploads%2F2021%2F05%2FOlivia-Rodrigo-Sour-Album-Artwork-billboard-1548-1621271558-768x433-1.jpg&f=1&nofb=1"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper style={{'textAlign': 'center'}}>
            <h2>{props.item.name}</h2>
            <img style={{}} src={props.item.description} alt="Album Cover" />

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}

export default Example;