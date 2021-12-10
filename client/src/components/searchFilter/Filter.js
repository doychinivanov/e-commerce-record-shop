import { Grid, Container, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import CategoryDropDown from './CategoryDropDown';

const Filter = ({theme, category, sortType, handleCategoryChange, handleSortChange}) => {

    return (
        <div style={{ 'paddingTop': 90, backgroundColor: theme.palette.background.primary }}>
        <Container fixed>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={3}>
                    <CategoryDropDown category={category} handleCategoryChange={handleCategoryChange} variant="outlined" />
                </Grid>

                <Grid item xs={2} sm={4} md={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortType}
                            label="Category"
                            onChange={handleSortChange}
                        >
                            <MenuItem sx={{width: '100%'}} value='newest'>By Newest</MenuItem>
                            <MenuItem sx={{width: '100%'}} value="oldest">By Oldest</MenuItem>
                            <MenuItem sx={{width: '100%'}} value="cheap">By Price Asc</MenuItem>
                            <MenuItem sx={{width: '100%'}} value="expensive">By Price Desc</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            
        </Container>
        </div>
    )
}

export default Filter;