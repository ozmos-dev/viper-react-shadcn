import { Button } from '@/components/ui/button';
import { HomeCard } from '@/components/home-card';
import { FormInput } from '@/components/form-input';
import { usePage } from '@ozmos/viper-react';
import { toast } from 'sonner';
import { PasswordConfirmation } from '@/components/password-confirmation';
import { AppearanceTabs } from '@/components/appearance-tabs';
import { route } from '@/pages/routes';
import { ThemeSelector } from '@/components/theme-selector';
import { NavLink } from 'react-router';

export default function Home() {
  const page = usePage<ViperGen.AppGroupHome>();

  const {
    data: serverTime,
    refetch: refetchTime,
    isFetching: refetchLoading,
  } = page.useQuery('serverTime');

  const {
    data: lazyTime,
    refetch: refetchLazyTime,
    isFetching: lazyTimeLoading,
  } = page.useQuery('lazyServerTime');

  const formTest = page.useForm('formsTest', {
    state: {
      number: '',
    },
    onSuccess() {
      formTest.reset();
      toast.success('Form submitted');
    },
  });

  function onPasswordConfirm() {
    alert('Password confirmed!');
  }

  return (
    <div className="flex flex-col items-center justify-center p-12 @container">
      <h1 className="text-4xl font-medium">Your New Viper App</h1>
      <h2 className="text-muted-foreground mt-2">
        Everything you need to start building
      </h2>

      <div className="mt-12 w-full grid grid-cols-1 @min-[800px]:grid-cols-2 @min-[1200px]:grid-cols-4 gap-4">
        <HomeCard
          title="Forms & Mutations"
          description="Call api's without writing any endpoints"
        >
          <div className="space-y-2">
            <FormInput
              id="demo-input"
              label="Enter a number less than 10 to see an error"
              onChange={e =>
                formTest.setState({
                  ...formTest.state,
                  number: e.target.value,
                })
              }
              value={formTest.state.number}
              error={formTest.errors.number}
            />
            <Button
              onClick={() => formTest.mutate()}
              loading={formTest.isPending}
            >
              Submit
            </Button>
          </div>
        </HomeCard>
        <HomeCard
          title="Props"
          description="Server data in your page with no manual wiring"
        >
          <div className="space-y-2">
            <p>{serverTime}</p>
            <Button onClick={() => refetchTime()} loading={refetchLoading}>
              Refetch
            </Button>
          </div>
        </HomeCard>
        <HomeCard
          title="Lazy Props"
          description="Fetch data only when you need it"
        >
          <p>{lazyTime || 'Not fetched yet'}</p>

          <div className="mt-2">
            <Button onClick={() => refetchLazyTime()} loading={lazyTimeLoading}>
              Fetch
            </Button>
          </div>
        </HomeCard>
        <HomeCard
          title="Theme Selector and Dark Mode"
          description="Stored in cookies so no flashing on load"
        >
          <div className="space-y-4">
            <AppearanceTabs />
            <div className="flex items-center gap-2">
              <span>Theme:</span>
              <ThemeSelector />
            </div>
            <p>
              Find more at{' '}
              <a
                className="underline"
                href="https://tweakcn.com/"
                target="_blank"
              >
                tweakcn.com
              </a>
            </p>
          </div>
        </HomeCard>
        <HomeCard
          title="Status Toasts"
          description="Styled notifications built in"
        >
          <div className="flex gap-2">
            <Button onClick={() => toast.success('Saved!')}>Success</Button>
            <Button onClick={() => toast.error('Uh oh!')}>Error</Button>
          </div>
        </HomeCard>
        <HomeCard
          title="Password Confirmation"
          description="Require authorization before continuing"
        >
          <PasswordConfirmation onConfirm={onPasswordConfirm}>
            <Button>Perform Secure Operation</Button>
          </PasswordConfirmation>
        </HomeCard>
        <HomeCard
          title="Profile Settings"
          description="Ready to go forms for password changes and profile updates"
        >
          <NavLink to={route('profile')}>
            <Button>Visit profile</Button>
          </NavLink>
        </HomeCard>
      </div>
    </div>
  );
}
