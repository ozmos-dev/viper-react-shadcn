import { Button } from '@/components/ui/button';
import { Heading } from '@/components/heading';
import { Separator } from '@/components/ui/separator';
import { Link, Outlet, useLocation } from 'react-router';
import { useBreadcrumb } from '@/hooks/use-breadcrumb';
import { cn } from '@/lib/utils';

export default function ProfileLayout() {
  const location = useLocation();

  useBreadcrumb({ id: 'profile', label: 'Profile', href: '/profile' });

  const tabs = [
    { label: 'General', value: 'profile', to: '/profile' },
    { label: 'Password', value: 'password', to: '/profile/password' },
    { label: 'Appearance', value: 'appearance', to: '/profile/appearance' },
  ];

  return (
    <div className="px-4 py-6">
      <Heading
        title="Settings"
        description="Manage your profile and account settings"
        className="mb-8"
      />

      <div className="flex flex-col space-y-8 md:space-y-0 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="w-full max-w-xl lg:w-48">
          <nav className="flex flex-col space-x-0 space-y-1">
            {tabs.map(item => (
              <Link to={item.to} key={item.to}>
                <Button
                  variant="ghost"
                  className={cn('w-full justify-start', {
                    'bg-muted': location.pathname === item.to,
                  })}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </aside>

        <Separator className="my-6 md:hidden" />

        <div className="flex-1 md:max-w-2xl">
          <section className="max-w-xl">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
}
