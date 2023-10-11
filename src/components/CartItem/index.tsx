import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './styles.module.css';
import { convertToCurrency } from '@/utils/common';
import { useCallback } from 'react';

interface Props {
  id: number;
  name: string;
  image_url: string;
  price: number;
  quantity?: number;
  onRemove: (id: number) => void;
}

export const CartItem = (props: Props) => {
  const { id, name, image_url, price, onRemove = () => {}, quantity } = props;

  const handleRemove = useCallback(() => {
    onRemove(id);
  }, [onRemove, id]);
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={image_url}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.price}>{convertToCurrency(price)}</p>
        <p className={styles.quantity}>{quantity}</p>
      </div>

      <div className={styles.deleteIcon} onClick={handleRemove}>
        <DeleteIcon />
      </div>
    </div>
  );
};
