import { connect } from "react-redux";

import { Container, Box } from "@mui/material";
import FavoritesCard from "./FavoritesCard";

const FavoritesList = ({ favorites, userId, theme }) => {
    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary;

    return (
        <div style={{ 'paddingTop': 90, 'paddingBottom': 90, 'minHeight': '100vh', backgroundColor: theme.palette.background.primary, color: textColor }}>
            <Container fixed>
                <Box sx={{ flexGrow: 1 }}>
                    {favorites.length > 0
                        ? favorites.map(record => <FavoritesCard key={record._id} userId={userId} recordData={record} theme={theme} />)
                        : <h1>You have no favorites records yet.</h1>
                    }
                </Box>
            </Container>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        favorites: state.user.favorites,
        userId: state.user._id
    }
}

export default connect(mapStateToProps)(FavoritesList);