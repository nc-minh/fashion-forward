'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';
import { useCartStore } from '@/store/useCartStore';
import { useCallback } from 'react';
import { convertToCurrency } from '@/utils/common';

interface Props {
  id: number;
  name: string;
  image_url: string;
  price: number;
  label: string;
  category: string;
}

export const Card = (props: Props) => {
  const { id, name, image_url, price, label, category } = props;
  const setCart = useCartStore((state) => state.setCart);
  const setOpenCart = useCartStore((state) => state.setOpenCart);

  const handleAddToCart = useCallback(() => {
    setCart({
      id,
      name,
      image_url,
      price,
      label,
      category,
    });

    setOpenCart(true);
  }, [category, id, image_url, label, name, price, setCart, setOpenCart]);

  return (
    <div className={`${styles.container}`}>
      <span className={`${styles.label}`}>{label}</span>
      <Link href={`/products/${id}`} className={`${styles.link}`}>
        <Image
          src={image_url}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Link>
      <div className={styles.addToCart} onClick={handleAddToCart}>
        Thêm nhanh vào giỏ
      </div>
      <div className={`${styles.contentFooter}`}>
        <h3 className={`${styles.name}`}>{name}</h3>
        <strong className={`${styles.price}`}>
          {convertToCurrency(price)}
        </strong>
      </div>
    </div>
  );
};
