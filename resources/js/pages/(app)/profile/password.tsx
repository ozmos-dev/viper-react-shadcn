import { useBreadcrumb } from '@/hooks/use-breadcrumb';
import { FormInput } from '@/components/form-input';
import { Button } from '@/components/ui/button';
import { usePage } from '@ozmos/viper-react';
import { toast } from 'sonner';
import { Heading } from '@/components/heading';

export default function Password() {
  useBreadcrumb({ id: 'change-password', label: 'Change Password' });

  const page = usePage<ViperGen.AppGroupProfilePassword>();

  const form = page.useForm('resetPassword', {
    state: {
      old_password: '',
      new_password: '',
    },
    onSuccess() {
      form.reset();
      toast.success('Password Changed!');
    },
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    form.mutate();
  }

  return (
    <div>
      <Heading
        title="Change Password"
        description="Confirm your old password and enter a new one"
      />
      <form method="post" onSubmit={onSubmit} className="mt-6">
        <div className="flex flex-col gap-6 max-w-sm">
          <FormInput
            id="old-password"
            label="Old Password"
            type="password"
            onChange={e =>
              form.setState({ ...form.state, old_password: e.target.value })
            }
            value={form.state.old_password}
            error={form.errors.old_password}
          />
          <FormInput
            id="new-password"
            label="New Password"
            type="password"
            onChange={e =>
              form.setState({ ...form.state, new_password: e.target.value })
            }
            value={form.state.new_password}
            error={form.errors.new_password}
          />
          <div>
            <Button loading={form.isPending}>Save</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
