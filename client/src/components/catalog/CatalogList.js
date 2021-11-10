import { Grid, Container } from "@mui/material";

const CatalogList = () => {

    return (
        <div style={{ 'margin-top': 90 }}>
            <Container fixed>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={2} sm={4} md={4}>
                        <div style={{ 'color': 'red', border: '1px solid red' }}>
                            lorem ipsum
                            lorem ipsum
                            lorem ipsum
                            lorem ipsum
                            lorem ipsum
                            lorem ipsum
                        </div>
                    </Grid>

                    <Grid item xs={2} sm={4} md={4}>
                    <div style={{ 'color': 'green', border: '1px solid green' }}>
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                    </div>
                    </Grid>

                    <Grid item xs={2} sm={4} md={4}>
                    <div style={{ 'color': 'blue', border: '1px solid blue' }}>
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                    </div>
                    </Grid>

                    <Grid item xs={2} sm={4} md={4}>
                    <div style={{ 'color': 'blue', border: '1px solid blue' }}>
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                        lorem ipsum
                    </div>
                    </Grid>
                </Grid >
            </Container>
        </div>
    );
}

export default CatalogList;