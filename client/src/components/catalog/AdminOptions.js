import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import DeleteComfirmatinModal from '../modals/DeleteConfirmationModal';

import styles from './CatalogCard.module.css';

const AdminOptions = ({productId, theme, refetchData}) => {
  const [deleteModalIsOpen, setDeleteModal] = useState(false);

  const openModal = useCallback(() => {
      setDeleteModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setDeleteModal(false);
}, []);

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

      <div className={styles.icon} onClick={openModal}>
        <DeleteOutlineOutlinedIcon />
      </div>

      <DeleteComfirmatinModal open={deleteModalIsOpen} handleClose={closeModal} theme={theme} productId={productId} refetchData={refetchData} />
    </div>
  );
};

export default AdminOptions;
