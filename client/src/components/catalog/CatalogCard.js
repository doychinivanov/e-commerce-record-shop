import AdminOptions from "./AdminOptions";
import CustomerOptions from "./CustomerOptions";

import { Grid } from "@mui/material";

import styles from "./CatalogCard.module.css";

const CatalogCard = ({
  theme,
  record,
  userId = null,
  userRole,
  userHasThisRecord,
  refetchData
}) => {
  return (
    <Grid item xs={2} sm={4} md={4} lg={3} xl={2}>
      <div
        className={styles.container}
        style={{ backgroundColor: theme.palette.background.primary }}
      >
        <div className={styles.circle}></div>

        <img src={record.imageUrl} alt="Record cover" />

        {userRole === "admin"
        ? <AdminOptions productId={record._id} theme={theme} refetchData={refetchData} />
        : <CustomerOptions productId={record._id} userId={userId} userHasThisRecord={userHasThisRecord} />}
      </div>
    </Grid>
  );
};

export default CatalogCard;
