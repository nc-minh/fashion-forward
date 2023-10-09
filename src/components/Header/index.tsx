'use client';

import Image from 'next/image';
import shoppingCart from '@/assets/images/shopping-cart.png';
import { Cart } from '@/containers/Cart';

export const Header = () => {
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

        <Cart>
          <div className="cursor-pointer">
            <Image
              src={shoppingCart}
              width={65}
              height={65}
              alt="Shopping cart"
            />
          </div>
        </Cart>
      </div>
    </header>
  );
};
