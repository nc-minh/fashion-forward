import { useCartStore } from '@/store/useCartStore';

export default function Checkout() {
  const cart = useCartStore((state) => state.cart);

  return <div>heckout</div>;
}
