'use client';

import Image from 'next/image';
import shoppingCart from '@/assets/images/shopping-cart.png';
import { Cart } from '@/containers/Cart';
import Link from 'next/link';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-8 py">
        <Link href={'/'}>
          <div className={styles.logo}>Fashion Forward</div>
        </Link>
        <div className={styles.menu}>
          <div className={styles.menuPc}>
            <a href="/" className={`text-lg font-medium ${styles.menuItem}`}>
              Hàng mới
            </a>
            <Link
              className={`text-lg font-medium ${styles.menuItem}`}
              href={'/female'}
            >
              Nữ
            </Link>
            <Link
              className={`text-lg font-medium ${styles.menuItem}`}
              href={'/male'}
            >
              Nam
            </Link>
          </div>

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
      </div>

      <div className={styles.mobileMenu}>
        <a href="/" className={`text-lg font-medium ${styles.menuItem}`}>
          Hàng mới
        </a>
        <Link
          className={`text-lg font-medium ${styles.menuItem}`}
          href={'/female'}
        >
          Nữ
        </Link>
        <Link
          className={`text-lg font-medium ${styles.menuItem}`}
          href={'/male'}
        >
          Nam
        </Link>
      </div>
    </header>
  );
};
