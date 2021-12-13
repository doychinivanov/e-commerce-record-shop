import { useState, useCallback } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormControl, Button, TextField } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import { makeStyles } from "@mui/styles";

import { getUserToken } from "../../api/apiUtils";
import CategoryDropDown from "../searchFilter/CategoryDropDown";
import MutateRecordInput from "./MutateRecordInput";

const RecordForm = ({ mutationFunction, recordInfo, type }) => {
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
  const storage = getStorage();
  const navigate = useNavigate();

  const [recordName, setRecordName] = useState(recordInfo?.name);
  const [artist, setArtist] = useState(recordInfo?.creatorArtist);
  const [year, setYear] = useState(recordInfo?.year);
  const [category, setCategory] = useState(recordInfo?.category ? recordInfo.category : "none");
  const [label, setLabel] = useState(recordInfo?.label);
  const [price, setPrice] = useState(recordInfo?.price);
  const [description, setDescription] = useState(recordInfo?.description);
  const [imageUrl, setIamgeUrl] = useState(recordInfo?.imageUrl);
  const [imgFile, setImgFile] = useState(null);

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
    if(!imgFile && !imageUrl) {
      toast.error("Please, upload an image!");

      return false;
    }

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

    if (!price || price <= 0) {
      setWrongPrice(true);
      toast.error("Price can't be less or equal to zero");

      return false;
    }

    if (!description.trim() || description.trim().length < 20) {
      setWrongDescription(true);
      toast.error("Provide a description with at least 20 characters!");

      return false;
    }

    return true;
  };

  const updateCategory = useCallback((ev) => {
    setCategory(ev.target.value);
  }, []);

  const uploadToLocalState = (ev) => {
    const allowedTypes = ['image/png', 'image/jpeg', ]
    const currentFile = ev.target.files[0];

    if (currentFile && allowedTypes.includes(currentFile.type)) {
      setImgFile(currentFile);
    } else {
      setImgFile(null);
      toast.error('Please select a valid image file.');
    }
  };

  const submitCreateForm = async () => {
    const loadingMsg = type === 'edit' ? "Updating record in process..." : "New record is being created...";
    const resolvedMsg = type === 'edit' ? "Succesfully updated." : "Succesfully created.";
    
    resetErrors();

    if (!allFieldsAreValid()) return;

    setIsLoading(true);
    const loadingToastID = toast.loading(loadingMsg);
    const idToken = await getUserToken();
    
    let url = imageUrl;
    
    if (imgFile) {
      const storageRef = ref(storage, `images/${imgFile.name}`);
      await uploadBytes(storageRef, imgFile);
      url = await getDownloadURL(storageRef);
    }


    const { data } = await mutationFunction({
      variables: {
        name: recordName,
        year,
        creatorArtist: artist,
        label,
        imageUrl: url,
        category,
        price,
        description,
        recordId: recordInfo?._id
      },
      context: { headers: { "x-authorization": idToken } },
    });

    setIsLoading(false);
    toast.update(loadingToastID, { render: resolvedMsg, type: "success", isLoading: false, autoClose: 3000 });
    navigate(`/products/${recordInfo?._id || data.createNewRecord._id}`);
  };

  return (
    <div className={classes.formStyle}>
      <FormControl>
        <span style={{ marginBottom: 25 }}>
          <FormControl>
            <input
              accept="image/*"
              className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={uploadToLocalState}
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
          {imgFile ? <span>{imgFile.name}</span> : null}
        </span>

        <MutateRecordInput
          labelText="Record Title"
          isWrong={wrongRecordName}
          handleInputChange={(ev) => setRecordName(ev.target.value)}
          isLoading={isLoading}
          inputValue={recordName}
          inputType="text"
          id="title-input"
        />

        <MutateRecordInput
          labelText="Artist"
          isWrong={wrongArtist}
          handleInputChange={(ev) => setArtist(ev.target.value)}
          isLoading={isLoading}
          inputValue={artist}
          inputType="text"
          id="artist-input"
        />

        <MutateRecordInput
          labelText="Year"
          isWrong={wrongYear}
          handleInputChange={(ev) => setYear(Number(ev.target.value))}
          isLoading={isLoading}
          inputValue={year}
          inputType="number"
          id="year-input"
        />

        <span style={{ marginTop: 25 }}>
          <CategoryDropDown
            category={category}
            handleCategoryChange={updateCategory}
            variant="standard"
            error={wrongCategory}
          />
        </span>

        <MutateRecordInput
          labelText="Record Label"
          isWrong={wrongLabel}
          handleInputChange={(ev) => setLabel(ev.target.value)}
          isLoading={isLoading}
          inputValue={label}
          inputType="text"
          id="label-input"
        />

        <MutateRecordInput
          labelText="Price"
          isWrong={wrongPrice}
          handleInputChange={(ev) => setPrice(Number(ev.target.value))}
          isLoading={isLoading}
          inputValue={price}
          inputType="number"
          id="price-input"
        />

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
          <span style={{ color: "#f5f5f5" }}>{type === 'edit' ? 'Edit Record' : 'Create Record'}</span>
        </Button>
      </FormControl>
    </div>
  );
};

export default RecordForm;
