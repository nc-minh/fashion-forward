'use client';

import { Card } from '@/components/Card';

import styles from './styles.module.css';
import { useNewProducts } from '@/hooks/newProducts';

export const NewFashion = () => {
  const products = useNewProducts();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Hàng mới</h2>
      <div className={`${styles.products}`}>
        {products?.map((product, index) => (
          <Card
            key={product.id}
            category={product.category}
            image_url={`/products/${product.image_url}`}
            id={product.id}
            label={product.label}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
