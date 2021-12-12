import { Link } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import styles from './CatalogCard.module.css';

const AdminOptions = ({productId}) => {
  return (
    <div className={styles.info}>
      <div className={styles.icon}>
        <EditOutlinedIcon />
      </div>

      <Link to={`/products/${productId}`}>
        <div className={styles.icon}>
          <SearchOutlinedIcon />
        </div>
      </Link>

      <div className={styles.icon}>
        <DeleteOutlineOutlinedIcon />
      </div>
    </div>
  );
};

export default AdminOptions;
