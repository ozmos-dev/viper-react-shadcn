import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/form-input';
import { usePage } from '@ozmos/viper-react';
import { toast } from 'sonner';
import { route } from '@/pages/routes';
import { NavLink } from 'react-router';

export default function ForgotPassword() {
  const page = usePage<ViperGen.AuthGroupForgotPassword>();
  const { state, setState, errors, isPending, mutate, reset } = page.useForm(
    'sendResetLink',
    {
      state: {
        email: '',
      },
      onSuccess(data: { message: string }) {
        toast.success('Password reset link sent', {
          description: data.message,
        });
        reset();
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
            <h1 className="text-xl font-bold">Forgot Password</h1>
            <div className="text-center text-sm">
              Know your account details?{' '}
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
              label="Email"
              type="email"
              id="email"
              placeholder="m@example.com"
              required
              value={state.email}
              onChange={e => setState({ email: e.target.value })}
              error={errors.email}
            />
            <Button type="submit" className="w-full" loading={isPending}>
              Send Reset Instructions
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
