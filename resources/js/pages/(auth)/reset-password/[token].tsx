import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/form-input';
import { usePage } from '@ozmos/viper-react';
import { toast } from 'sonner';
import { router } from '@/pages/routes';
import { useNavigate } from 'react-router';
import { Mail } from 'lucide-react';

export default function ResetPassword() {
  const page = usePage<ViperGen.AuthGroupResetPasswordTokenParam>();
  const navigate = useNavigate();

  const { data: email } = page.useQuery('email');

  const { state, setState, errors, isPending, mutate, reset } = page.useForm(
    'resetPassword',
    {
      state: {
        email: email,
        password: '',
      },
      onSuccess(data: { message: string }) {
        toast.success('Password reset', {
          description: data.message,
        });
        reset();
        navigate('/login');
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
            <h1 className="text-xl font-bold">Reset Your Password</h1>
          </div>
          <div className="flex flex-col gap-6">
            <FormInput
              label="Email"
              type="email"
              id="email"
              placeholder="m@example.com"
              required
              value={state.email}
              error={errors.email}
              disabled
              readOnly
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
              Reset Password
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
