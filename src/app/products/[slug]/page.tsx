'use client';

import { useProducts } from '@/hooks/products';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';

import styles from './styles.module.css';
import { convertToCurrency } from '@/utils/common';
import { NewFashion } from '@/containers/NewFashion';
import { Button } from '@mui/material';
import { useCartStore } from '@/store/useCartStore';

export default function ProductItem({ params }: any) {
  const slug = params?.slug ?? '';

  const products = useProducts({});

  const setCart = useCartStore((state) => state.setCart);
  const setOpenCart = useCartStore((state) => state.setOpenCart);

  const product = useMemo(
    () => products?.find((item) => String(item.id) === slug),
    [products, slug]
  );

  const handleAddToCart = useCallback(() => {
    setCart({
      id: product?.id ?? 0,
      name: product?.name ?? '',
      image_url: `/products/${product?.image_url}`,
      price: product?.price ?? 0,
      label: product?.label ?? '',
      category: product?.category ?? '',
    });

    setOpenCart(true);
  }, [
    product?.category,
    product?.id,
    product?.image_url,
    product?.label,
    product?.name,
    product?.price,
    setCart,
    setOpenCart,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.imageWrapper}>
          <Image
            src={`/products/${product?.image_url}`}
            alt={product?.name ?? ''}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className={styles.contentWrapper}>
          <h1>{product?.name}</h1>
          <p>{convertToCurrency(product?.price ?? '')}</p>
          <Button
            className={styles.btn}
            variant="contained"
            onClick={handleAddToCart}
          >
            Mua
          </Button>
        </div>
      </div>

      <NewFashion />
    </div>
  );
}
