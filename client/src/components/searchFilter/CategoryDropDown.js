import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";


const CategoryDropDown = ({category, handleCategoryChange, variant, error}) =>{

    return (
        <FormControl fullWidth>
            <InputLabel variant={variant} id="demo-simple-select-label" error={error}>Category</InputLabel>
            <Select
              variant={variant}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleCategoryChange}
              error={error}
            >
              <MenuItem sx={{ width: "100%" }} value="none">
                {' '}
              </MenuItem>
              <MenuItem sx={{ width: "100%" }} value="all">
                All
              </MenuItem>
              <MenuItem sx={{ width: "100%" }} value="pop">
                Pop
              </MenuItem>
              <MenuItem sx={{ width: "100%" }} value="jazz">
                Jazz
              </MenuItem>
              <MenuItem sx={{ width: "100%" }} value="classical rock">
                Classical Rock
              </MenuItem>
              <MenuItem sx={{ width: "100%" }} value="metal">
                Metal
              </MenuItem>
              <MenuItem sx={{ width: "100%" }} value="classical">
                Classical
              </MenuItem>
              <MenuItem sx={{ width: "100%" }} value="hard rock">
                Hard Rock
              </MenuItem>
              <MenuItem sx={{ width: "100%" }} value="indie rock">
                Indie Rock
              </MenuItem>
              <MenuItem sx={{ width: "100%" }} value="blues">
                Blues
              </MenuItem>
            </Select>
          </FormControl>
    )
}

export default CategoryDropDown;