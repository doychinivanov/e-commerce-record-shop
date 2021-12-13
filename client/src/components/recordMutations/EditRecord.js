import { useQuery, useMutation } from "@apollo/client";
import { Container, Box } from "@mui/material";
import RecordForm from "./RecordForm";
import { GET_PRODUCT_INFO_FOR_DETAILS } from "../../graphql/queries";
import { UPDATE_RECORD } from "../../graphql/mutations";

const EditRecord = ({ theme, recordId }) => {
  const textColor =
    theme.palette.mode === "dark"
      ? theme.palette.text.primary
      : theme.palette.text.secondary;

  const { loading, data } = useQuery(GET_PRODUCT_INFO_FOR_DETAILS, {variables: {recordId}});
  const [updateRecordMutation, { error }] = useMutation(UPDATE_RECORD);

  if(loading) return null;

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
          <RecordForm mutationFunction={updateRecordMutation} recordInfo={data.record} type="edit" />
        </Box>
      </Container>
    </div>
  );
};

export default EditRecord;
