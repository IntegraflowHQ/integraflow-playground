import { Inter } from 'next/font/google';
import { DashboardProvider } from '@/context';
import { CardsContainer } from '@/components/CardsContainer';
import { Sidebar } from '@/components/Sidebar';
import { HomeSidebar } from '@/components/HomeSidebar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <DashboardProvider>
      <main className={`flex ${inter.className}`}>
        <Sidebar>
          <HomeSidebar />
        </Sidebar>
        <CardsContainer />
      </main>
    </DashboardProvider>
  );
}
