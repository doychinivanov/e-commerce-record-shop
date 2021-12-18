import { useMutation } from "@apollo/client";
import { Button, Box, Modal } from "@mui/material";
import { toast } from "react-toastify";

import { getUserToken } from "../../api/apiUtils";
import { DELETE_RECORD } from "../../graphql/mutations";

const DeleteConfirmationModal = ({ open, handleClose, theme, productId, refetchData }) => {
  const backgroundColor =
    theme.palette.mode === "dark"
      ? theme.palette.background.primary
      : theme.palette.text.secondary;
  const textColor =
    theme.palette.mode === "dark"
      ? theme.palette.text.primary
      : theme.palette.background.secondary;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "55%",
    bgcolor: backgroundColor,
    color: textColor,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  const [deleteRecordMutation, { error }] = useMutation(DELETE_RECORD);

  const deleteRecordHanlder = async () => {
        const idToken = await getUserToken();

        deleteRecordMutation({variables: {recordId: productId}, context: { headers: { 'x-authorization': idToken } }})
        .then(() => {
            handleClose();
            refetchData();
        })
        .catch((err) => toast.error(err.message))
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <h2>Are you sure you want to delete this record?</h2>

            <div>
              <Button onClick={handleClose} sx={{ mt: 5, mr: 10 }}>
                <span style={{ color: "#f5f5f5" }}>Cancel</span>
              </Button>

              <Button onClick={deleteRecordHanlder} sx={{ mt: 5 }}>
                <span style={{ color: "#f5f5f5" }}>Delete</span>
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteConfirmationModal;
