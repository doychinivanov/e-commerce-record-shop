import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import CategoryDropDown from "../searchFilter/CategoryDropDown";

const RecordForm = () => {
  const useStyles = makeStyles({
    formStyle: {
      "& .MuiFormControl-root": {
        width: "70%",
      },
      "& .MuiTextField-root": {
        width: "100%",
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.formStyle}>
      <FormControl>
        <span>
          <FormControl>
            {/* error={wrongEmail} */}
            <InputLabel htmlFor="title-input">Record Title</InputLabel>

            {/* error={wrongEmail} */}
            {/* disabled={isLoading} */}
            <Input
              // onChange={(ev) => setEmail(ev.target.value)}
              id="title-input"
            />
          </FormControl>
        </span>

        <span style={{ marginTop: 25 }}>
          <FormControl>
            {/* error={wrongEmail} */}
            <InputLabel htmlFor="artist-input">Artist</InputLabel>

            {/* error={wrongEmail} */}
            {/* disabled={isLoading} */}
            <Input
              // onChange={(ev) => setEmail(ev.target.value)}
              id="artist-input"
            />
          </FormControl>
        </span>

        <span style={{ marginTop: 25 }}>
          <FormControl>
            {/* error={wrongEmail} */}
            <InputLabel htmlFor="year-input">Year</InputLabel>

            {/* error={wrongEmail} */}
            {/* disabled={isLoading} */}
            <Input
              // onChange={(ev) => setEmail(ev.target.value)}
              id="year-input"
              type="number"
            />
          </FormControl>
        </span>

        <span style={{ marginTop: 25 }}>
          <CategoryDropDown
            category='none'
            handleCategoryChange={() => console.log("TODO")}
            variant="standard"
          />
        </span>

        <span style={{ marginTop: 25 }}>
          <FormControl>
            {/* error={wrongEmail} */}
            <InputLabel htmlFor="label-input">Record Label</InputLabel>

            {/* error={wrongEmail} */}
            {/* disabled={isLoading} */}
            <Input
              // onChange={(ev) => setEmail(ev.target.value)}
              id="label-input"
            />
          </FormControl>
        </span>

        <span style={{ marginTop: 25 }}>
          <FormControl>
            {/* error={wrongEmail} */}
            <InputLabel htmlFor="price-input">Price</InputLabel>

            {/* error={wrongEmail} */}
            {/* disabled={isLoading} */}
            <Input
              // onChange={(ev) => setEmail(ev.target.value)}
              id="price-input"
              type="number"
            />
          </FormControl>
        </span>

        <span style={{ marginTop: 25 }}>

          <FormControl>
            <TextField
            className={classes.formStyle}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={10}              
            />

          </FormControl>
        </span>
      </FormControl>
    </div>
  );
};

export default RecordForm;
