'use client';

import Image from 'next/image';
import shoppingCart from '@/assets/images/shopping-cart.png';
import { useCartStore } from '@/store/useCartStore';

export const Header = () => {
  const nuts = useCartStore((state) => state.ids);
  return (
    <header className="flex items-center justify-between px-8 py">
      <div className="text-2xl font-bold">Fashion Forward</div>
      <div className="flex items-center justify-between space-x-4">
        <a href="   " className="text-lg font-medium">
          Hàng mới
        </a>
        <a href="   " className="text-lg font-medium">
          Nữ
        </a>
        <a href="   " className="text-lg font-medium">
          Nam
        </a>

        {JSON.stringify(nuts)}

        <div className="cursor-pointer">
          <Image
            src={shoppingCart}
            width={65}
            height={65}
            alt="Shopping cart"
          />
        </div>
      </div>
    </header>
  );
};
