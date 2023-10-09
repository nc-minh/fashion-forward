import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { useCallback, useMemo } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import styles from './styles.module.css';
import { CartItem } from '@/components/CartItem';
import { useCartStore } from '@/store/useCartStore';
import { convertToCurrency } from '@/utils/common';

interface Props {
  children: React.ReactNode;
}

export const Cart = (props: Props) => {
  const { children } = props;

  const cart = useCartStore((state) => state.cart);
  const remove = useCartStore((state) => state.remove);
  const setOpenCart = useCartStore((state) => state.setOpenCart);
  const isOpenCart = useCartStore((state) => state.isOpenCart);

  const handleOpen = useCallback(() => setOpenCart(true), [setOpenCart]);
  const handleClose = useCallback(() => setOpenCart(false), [setOpenCart]);

  const totalPrice = useMemo(() => {
    return cart?.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  const handleRemove = useCallback(
    (id: number) => {
      remove(id);
    },
    [remove]
  );

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <SwipeableDrawer
        anchor={'right'}
        open={isOpenCart}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        <div className={styles.cart}>
          <div className={styles.cartHeader}>
            <h3 className={styles.cartTitle}>Giỏ hàng</h3>
            <ArrowForwardIosIcon
              onClick={handleClose}
              className={styles.cartIconBack}
            />
          </div>

          <div className={styles.content}>
            {cart?.length > 0 &&
              cart?.map((item) => (
                <CartItem
                  id={item.id}
                  image_url={item.image_url}
                  name={item.name}
                  price={item.price}
                  key={item.id}
                  onRemove={handleRemove}
                />
              ))}
          </div>

          <div className={styles.cartFooter}>
            <div className={styles.finalPrice}>
              <p className={styles.finalPriceText}>Tạm tính</p>
              <p className={styles.total}>{convertToCurrency(totalPrice)}</p>
            </div>
            <Button className={styles.calcBtn} variant="contained">
              Thanh toán
            </Button>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};
