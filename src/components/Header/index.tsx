import Image from 'next/image';
import shoppingCart from '@/assets/images/shopping-cart.png';

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
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

        <div>
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
