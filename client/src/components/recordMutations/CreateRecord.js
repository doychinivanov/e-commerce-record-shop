import { useMutation } from "@apollo/client";
import { Container, Box } from "@mui/material";
import { toast } from "react-toastify";

import { CREATE_NEW_RECORD } from "../../graphql/mutations";
import RecordForm from "./RecordForm";

const CreateRecord = ({ theme }) => {
  const textColor =
    theme.palette.mode === "dark"
      ? theme.palette.text.primary
      : theme.palette.text.secondary;

  const [createNewRecordMutation, { error }] = useMutation(CREATE_NEW_RECORD);

  if (error) toast.error(error.message);

  
  return (
    <div
      style={{
        paddingTop: 90,
        paddingBottom: 90,
        backgroundColor: theme.palette.background.primary,
        color: textColor,
      }}
    >
      <Container fixed>
        <Box
          sx={{ flexGrow: 1 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <RecordForm mutationFunction={createNewRecordMutation} />
        </Box>
      </Container>
    </div>
  );
};

export default CreateRecord;
