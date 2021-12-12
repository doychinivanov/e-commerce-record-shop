import {
    FormControl,
    InputLabel,
    Input,
  } from "@mui/material";

const MutateRecordInput = ({labelText, isWrong, handleInputChange, isLoading, inputValue, inputType, id}) => {

    return (
        <span style={{ marginTop: 25 }}>
          <FormControl>
            <InputLabel htmlFor={id} error={isWrong}>
              {labelText}
            </InputLabel>
            <Input
              onChange={handleInputChange}
              id={id}
              value={inputValue}
              error={isWrong}
              disabled={isLoading}
              type={inputType}
            />
          </FormControl>
        </span>
    )

}

export default MutateRecordInput;