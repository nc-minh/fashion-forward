'use client';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { useCallback, useMemo, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import styles from './styles.module.css';
import { CartItem } from '@/components/CartItem';
import { useCartStore } from '@/store/useCartStore';
import { convertToCurrency } from '@/utils/common';
import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  TextField,
} from '@mui/material';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

export const Cart = (props: Props) => {
  const { children } = props;

  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [invalid, setInValid] = useState(false);

  const handleOpenInValid = useCallback(() => {
    setInValid(true);
  }, [setInValid]);

  const handleCloseInvalid = useCallback(() => {
    setInValid(false);
  }, [setInValid]);

  const handleCloseSnackbar = useCallback(() => {
    setOpenSnackbar(false);
  }, [setOpenSnackbar]);

  const handleOpenSnackbar = useCallback(() => {
    setOpenSnackbar(true);
  }, [setOpenSnackbar]);

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, [setOpenDialog]);

  const handleOpenDialog = useCallback(() => {
    setOpenDialog(true);
  }, [setOpenDialog]);

  const cart = useCartStore((state) => state.cart);
  const remove = useCartStore((state) => state.remove);
  const setOpenCart = useCartStore((state) => state.setOpenCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const isOpenCart = useCartStore((state) => state.isOpenCart);

  const handleOpen = useCallback(() => setOpenCart(true), [setOpenCart]);
  const handleClose = useCallback(() => setOpenCart(false), [setOpenCart]);

  const totalPrice = useMemo(() => {
    return cart?.reduce((total, item) => {
      return total + item.price * (item?.quantity ?? 1);
    }, 0);
  }, [cart]);

  const handleRemove = useCallback(
    (id: number) => {
      remove(id);
    },
    [remove]
  );

  const handleCheckout = useCallback(() => {
    setOpenCart(false);
    handleOpenDialog();
  }, [handleOpenDialog, setOpenCart]);

  const handleSubmit = useCallback(() => {
    handleOpenSnackbar();
    handleCloseDialog();
    clearCart();
  }, [clearCart, handleCloseDialog, handleOpenSnackbar]);

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
                  quantity={item?.quantity}
                />
              ))}
          </div>

          <div className={styles.cartFooter}>
            <div className={styles.finalPrice}>
              <p className={styles.finalPriceText}>Tạm tính</p>
              <p className={styles.total}>{convertToCurrency(totalPrice)}</p>
            </div>
            <Button
              className={styles.calcBtn}
              variant="contained"
              onClick={handleCheckout}
            >
              Thanh toán
            </Button>
          </div>
        </div>
      </SwipeableDrawer>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">CHÀO BẠN</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Điền đầy đủ thông tin để đặt hàng nhanh chóng và nhận cơ hội trúng
            nhà lầu xe hơi!
          </DialogContentText>

          <DialogContentText id="alert-dialog-description" className="py-1">
            Liên hệ với chúng tôi qua FACEBOOK:{' '}
            <Link href="https://www.facebook.com/profile.php?id=61552249746023">
              <strong>Fashion Forward</strong>
            </Link>{' '}
            để theo dõi đơn hàng và được tư vấn nhanh nhất!
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nhập tên"
            type="text"
            fullWidth
            variant="standard"
            required
          />

          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Nhập số điện thoại"
            type="number"
            fullWidth
            variant="standard"
            required
          />

          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Nhập số địa chỉ"
            type="text"
            fullWidth
            variant="standard"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Hủy</Button>
          <Button onClick={handleSubmit} autoFocus>
            Đặt hàng
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Đặt hàng thành công!
        </Alert>
      </Snackbar>

      <Snackbar
        open={invalid}
        autoHideDuration={6000}
        onClose={handleCloseInvalid}
      >
        <Alert
          onClose={handleCloseInvalid}
          severity="error"
          sx={{ width: '100%' }}
        >
          Vui lòng điền đầy đủ thông tin!
        </Alert>
      </Snackbar>
    </div>
  );
};
