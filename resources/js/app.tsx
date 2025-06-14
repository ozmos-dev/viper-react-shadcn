import '../css/app.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './pages/routes';
import { initializeAppearance } from '@/hooks/use-appearance';
import { initializeTheme } from '@/hooks/use-theme';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ViperProvider } from '@ozmos/viper-react';

const queryClient = new QueryClient();

createRoot(document.getElementById('app')!).render(
  <QueryClientProvider client={queryClient}>
    <ViperProvider>
      <RouterProvider router={router} />
    </ViperProvider>
  </QueryClientProvider>,
);

initializeAppearance();
initializeTheme();
