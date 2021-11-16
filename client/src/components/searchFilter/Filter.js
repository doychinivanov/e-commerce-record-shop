import { useState } from "react";
import { Grid, Container, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useColorMode } from '../../contexts/ColorModeCtx'


const Filter = () => {
    const { theme } = useColorMode();

    const [category, setCategory] = useState('');    

    const handleChange = (event) => {
        setCategory(event.target.value);
      };

    return (
        <div style={{ 'padding-top': 90, backgroundColor: theme.palette.background.primary }}>
        <Container fixed>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem value='pop'>Pop</MenuItem>
                            <MenuItem value="jazz">Jazz</MenuItem>
                            <MenuItem value="classical rock">Classical Rock</MenuItem>
                            <MenuItem value="metal">Metal</MenuItem>
                            <MenuItem value="classical">Classical</MenuItem>
                            <MenuItem value="hard rock">Hard Rock</MenuItem>
                            <MenuItem value="indie rock">Indie Rock</MenuItem>
                            <MenuItem value="blues">Blues</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
        </div>
    )
}

export default Filter;