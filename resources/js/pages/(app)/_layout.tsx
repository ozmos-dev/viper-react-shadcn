import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { usePage } from '@ozmos/viper-react';
import { NavLink, Outlet, useNavigate } from 'react-router';
import { useBreadcrumb, useBreadcrumbs } from '@/hooks/use-breadcrumb';
import { AppSidebar } from '@/components/app-sidebar';
import { Fragment } from 'react/jsx-runtime';

export default function AppLayout() {
  const page = usePage<ViperGen.AppGroupLayout>();
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumbs();

  useBreadcrumb({
    label: 'Home',
    id: 'home',
    href: '/home',
  });

  const { data: user } = page.useQuery('user');

  const logout = page.useMutation('logout', {
    onSuccess() {
      navigate('/login');
    },
  });

  return (
    <SidebarProvider>
      <AppSidebar onLogout={() => logout.mutate({})} user={user} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((crumb, i) => (
                  <Fragment key={crumb.id}>
                    {i !== breadcrumbs.length - 1 && (
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink asChild>
                          <NavLink to={crumb.href}>{crumb.label}</NavLink>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    )}
                    {i === breadcrumbs.length - 1 && (
                      <BreadcrumbItem>
                        <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                      </BreadcrumbItem>
                    )}
                    {i !== breadcrumbs.length - 1 && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}
                  </Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
