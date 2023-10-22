import { Banner } from '@/components/Banner';
import { FemaleFashion } from '@/containers/FemaleFashion';
import { MaleFashion } from '@/containers/MaleFashion';
import { NewFashion } from '@/containers/NewFashion';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <Banner />

      <NewFashion />

      <FemaleFashion />

      <MaleFashion />
    </main>
  );
}
