import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { makeStyles } from "@mui/styles";

import { Grid } from "@mui/material";

import styles from "./CatalogCard.module.css";

const CatalogAddNewCard = ({ theme }) => {
  const useStyles = makeStyles({
    myComponent: {
      "& .MuiSvgIcon-root": {
        color:
          theme.palette.mode === "dark"
            ? theme.palette.text.primary
            : theme.palette.text.secondary,
        cursor: "pointer",
        width: "20%",
        height: "100%",
      },
    },
  });

  const classes = useStyles();

  return (
    <Grid item xs={2} sm={4} md={4} lg={3} xl={2}>
      <div
        className={styles.container}
        style={{ backgroundColor: theme.palette.background.primary }}
      >
        <div className={[classes.myComponent, styles.container].join(" ")}>
          <Link to='/create' style={{textAlign: 'center'}}>
            <AddBoxIcon />
          </Link>
        </div>
      </div>
    </Grid>
  );
};

export default CatalogAddNewCard;
