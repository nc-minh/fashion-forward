'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';
import { useCartStore } from '@/store/useCartStore';

interface Props {
  id: number;
  name: string;
  image_url: string;
  price: number;
  label: string;
  category: string;
}

export const Card = (props: Props) => {
  const { id, name, image_url, price, label } = props;
  const setCart = useCartStore((state) => state.setIds);

  return (
    <div className={`${styles.container}`}>
      <span className={`${styles.label}`}>{label}</span>
      <Link href={`${id}`} className={`${styles.link}`}>
        <Image
          src={image_url}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Link>
      <div
        className={styles.addToCart}
        onClick={() => {
          setCart(id);
        }}
      >
        Thêm nhanh vào giỏ
      </div>
      <div className={`${styles.contentFooter}`}>
        <h3 className={`${styles.name}`}>{name}</h3>
        <strong className={`${styles.price}`}>{price} đ</strong>
      </div>
    </div>
  );
};
