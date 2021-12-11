import { Grid, Container, Box } from "@mui/material";

import RecordForm from "./RecordForm";

const CreateRecord = ({ theme }) => {
  const textColor =
    theme.palette.mode === "dark"
      ? theme.palette.text.primary
      : theme.palette.text.secondary;

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
        <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center" justifyContent="center">
          <RecordForm />
        </Box>
      </Container>
    </div>
  );
};

export default CreateRecord;
