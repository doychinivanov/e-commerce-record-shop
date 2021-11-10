import { Grid, Container } from "@mui/material";
import CatalogCard from "./CatalogCard";

const CatalogList = () => {

    return (
        <div style={{ 'margin-top': 90 }}>
            <Container fixed>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>

                    <Grid item xs={2} sm={4} md={3}>
                        <CatalogCard />
                    </Grid>

                    <Grid item xs={2} sm={4} md={3}>
                        <CatalogCard />
                    </Grid>

                    <Grid item xs={2} sm={4} md={3}>
                        <CatalogCard />
                    </Grid>

                    <Grid item xs={2} sm={4} md={3}>
                        <CatalogCard />
                    </Grid>
                </Grid >
            </Container>
        </div>
    );
}

export default CatalogList;