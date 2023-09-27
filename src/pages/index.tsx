import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/Sidebar';
import { DashboardProvider } from '@/context';
import { CardsContainer } from '@/components/CardsContainer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <DashboardProvider>
      <main
        className={`flex flex-col lg:flex-row min-h-screen ${inter.className}`}
      >
        <Sidebar />
        <CardsContainer />
      </main>
    </DashboardProvider>
  );
}
