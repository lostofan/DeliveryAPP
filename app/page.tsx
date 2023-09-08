import { Header } from '@/app/components/sections/Header';
import { Restaurants } from './components/sections/Restaurants/Restaurants';
import { Promo } from './components/sections/Promo';
import { Selector } from './components/sections/Selector';

export default async function Home() {
  return (
    <div className="appWrapper">
      <Header />
      <main>
        <Promo />
        <Selector />
        <Restaurants />
      </main>
    </div>
  );
}
