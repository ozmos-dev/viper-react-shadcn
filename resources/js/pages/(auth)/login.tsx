import { usePage } from '@ozmos/viper-react';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/form-input';
import { route } from '@/pages/routes';
import { NavLink, useNavigate } from 'react-router';

export default function Login() {
  const page = usePage<ViperGen.AuthGroupLogin>();
  const navigate = useNavigate();

  const { state, setState, errors, isPending, mutate } = page.useForm('login', {
    state: {
      email: '',
      password: '',
    },
    onSuccess() {
      navigate('/home');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className={cn('flex flex-col gap-6')}>
      <form method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <Mail className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
            <div className="text-center text-sm">
              Don't have an account?{' '}
              <NavLink
                to={route('register')}
                className="underline underline-offset-4"
              >
                Sign up
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <FormInput
              label="Email"
              type="email"
              id="email"
              placeholder="m@example.com"
              required
              value={state.email}
              onChange={e => setState({ ...state, email: e.target.value })}
              error={errors.email}
            />
            <FormInput
              label="Password"
              type="password"
              id="password"
              required
              value={state.password}
              onChange={e => setState({ ...state, password: e.target.value })}
              error={errors.password}
            />
            <div className="flex flex-col gap-2.5">
              <Button type="submit" className="w-full" loading={isPending}>
                Login
              </Button>
              <div className="text-center text-sm underline">
                <NavLink to={route('password.request')}>
                  Forgot your password?
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
