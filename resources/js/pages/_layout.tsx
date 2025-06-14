import { Toaster } from '@/components/ui/sonner';
import { useNProgress } from '@/hooks/use-nprogress';
import { Outlet } from 'react-router';

export default function Layout() {
  useNProgress();

  return (
    <div>
      <Outlet />
      <Toaster />
    </div>
  );
}
