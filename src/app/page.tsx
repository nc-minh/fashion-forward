import { Banner } from '@/components/Banner';
import { NewFashion } from '@/containers/NewFashion';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <Banner />

      <NewFashion />
    </main>
  );
}
