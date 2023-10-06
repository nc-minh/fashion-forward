import Image from 'next/image';
import saleBanner from '@/assets/images/sale-banner.jpg';

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <Image src={saleBanner} width={850} height={400} alt="Shopping cart" />
      </div>
    </div>
  );
};
