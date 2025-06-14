import React from 'react';
import { usePage } from '@ozmos/viper-react';
import { NavLink, useNavigate } from 'react-router';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/form-input';
import { route } from '@/pages/routes';

export default function Register() {
  const page = usePage<ViperGen.AuthGroupRegister>();
  const navigate = useNavigate();

  const { state, setState, errors, isPending, mutate } = page.useForm(
    'register',
    {
      state: {
        name: '',
        email: '',
        password: '',
      },
      onSuccess() {
        navigate('/home');
      },
    },
  );

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
              Already have an account?{' '}
              <NavLink
                to={route('login')}
                className="underline underline-offset-4"
              >
                Log in
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <FormInput
              label="Name"
              type="name"
              id="name"
              placeholder="Jane Doe"
              required
              value={state.name}
              onChange={e => setState({ ...state, name: e.target.value })}
              error={errors.name}
            />
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
            <Button type="submit" className="w-full" loading={isPending}>
              Sign Up
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{' '}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
