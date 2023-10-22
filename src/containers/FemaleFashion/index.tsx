'use client';

import { Card } from '@/components/Card';
import { useProducts } from '@/hooks/products';

import styles from './styles.module.css';

export const FemaleFashion = () => {
  const products = useProducts({ category_code: 'FEMALE' });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Hàng Nữ</h2>
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
