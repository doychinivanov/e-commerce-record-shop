import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import { makeStyles } from "@mui/styles";

import CategoryDropDown from "../searchFilter/CategoryDropDown";

const RecordForm = () => {
  const useStyles = makeStyles({
    formStyle: {
      "& .MuiFormControl-root": {
        width: "100%",
      },
      "& .MuiTextField-root": {
        width: "100%",
      },
      width: "65%",
    },
  });

  const classes = useStyles();

  const [recordName, setRecordName] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("none");
  const [label, setLabel] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [wrongRecordName, setWrongRecordName] = useState(false);
  const [wrongArtist, setWrongArtist] = useState(false);
  const [wrongYear, setWrongYear] = useState(false);
  const [wrongCategory, setWrongCategory] = useState(false);
  const [wrongLabel, setWrongLabel] = useState(false);
  const [wrongPrice, setWrongPrice] = useState(false);
  const [wrongDescription, setWrongDescription] = useState(false);

  const resetErrors = () => {
    setWrongRecordName(false);
    setWrongArtist(false);
    setWrongYear(false);
    setWrongCategory(false);
    setWrongLabel(false);
    setWrongPrice(false);
    setWrongDescription(false);
  };

  const allFieldsAreValid = () => {
    if (!recordName.trim() || recordName.trim().length < 2) {
      setWrongRecordName(true);
      toast.error("Invalid record name!");

      return false;
    }

    if (!artist.trim() || artist.trim().length < 2) {
      setWrongArtist(true);
      toast.error("Invalid artist name!");

      return false;
    }

    if (!year || year < 1900) {
      setWrongYear(true);
      toast.error("Invalid year!");

      return false;
    }

    if (category === "none") {
      setWrongCategory(true);
      toast.error("Invalid category!");

      return false;
    }

    if (!label.trim() || label.trim().length < 3) {
      setWrongLabel(true);
      toast.error("Invalid label name!");

      return false;
    }

    if (!price.trim() || price <= 0) {
      setWrongPrice(true);
      toast.error("Price can't be less or equal to zero");

      return false;
    }

    if (!description.trim() || description.trim().length < 15) {
      setWrongDescription(true);
      toast.error("Provide a description with at least 15 characters!");

      return false;
    }

    return true;
  };

  const updateCategory = useCallback((ev) => {
    setCategory(ev.target.value);
  }, []);

  const submitCreateForm = () => {
    resetErrors();

    if (!allFieldsAreValid()) return;

    setIsLoading(true);

    console.log("form sent");

    setIsLoading(false);
  };

  return (
    <div className={classes.formStyle}>
      <FormControl>
        <span>
          <FormControl>
            <input
              accept="image/*"
              className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="raised"
                component="span"
                className={classes.button}
              >
                <FileUploadIcon /> Upload Record Image
              </Button>
            </label>
          </FormControl>
        </span>

        <span>
          <FormControl>
            <InputLabel htmlFor="title-input" error={wrongRecordName}>
              Record Title
            </InputLabel>
            <Input
              onChange={(ev) => setRecordName(ev.target.value)}
              id="title-input"
              value={recordName}
              error={wrongRecordName}
              disabled={isLoading}
            />
          </FormControl>
        </span>

        <span style={{ marginTop: 25 }}>
          <FormControl>
            <InputLabel htmlFor="artist-input" error={wrongArtist}>
              Artist
            </InputLabel>

            <Input
              onChange={(ev) => setArtist(ev.target.value)}
              id="artist-input"
              value={artist}
              error={wrongArtist}
              disabled={isLoading}
            />
          </FormControl>
        </span>

        <span style={{ marginTop: 25 }}>
          <FormControl>
            <InputLabel htmlFor="year-input" error={wrongYear}>
              Year
            </InputLabel>

            <Input
              onChange={(ev) => setYear(ev.target.value)}
              id="year-input"
              type="number"
              value={year}
              error={wrongYear}
              disabled={isLoading}
            />
          </FormControl>
        </span>

        <span style={{ marginTop: 25 }}>
          <CategoryDropDown
            category={category}
            handleCategoryChange={updateCategory}
            variant="standard"
            error={wrongCategory}
          />
        </span>

        <span style={{ marginTop: 25 }}>
          <FormControl>
            <InputLabel htmlFor="label-input" error={wrongLabel}>
              Record Label
            </InputLabel>

            <Input
              onChange={(ev) => setLabel(ev.target.value)}
              id="label-input"
              value={label}
              error={wrongLabel}
              disabled={isLoading}
            />
          </FormControl>
        </span>

        <span style={{ marginTop: 25 }}>
          <FormControl>
            <InputLabel htmlFor="price-input" error={wrongPrice}>
              Price
            </InputLabel>

            <Input
              onChange={(ev) => setPrice(ev.target.value)}
              id="price-input"
              type="number"
              value={price}
              error={wrongPrice}
              disabled={isLoading}
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
              onChange={(ev) => setDescription(ev.target.value)}
              value={description}
              error={wrongDescription}
              disabled={isLoading}
            />
          </FormControl>
        </span>

        <Button onClick={submitCreateForm} sx={{ mt: 5 }}>
          <span style={{ color: "#f5f5f5" }}>Create Record</span>
        </Button>
      </FormControl>
    </div>
  );
};

export default RecordForm;
