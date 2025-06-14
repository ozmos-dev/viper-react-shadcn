import { FormInput } from '@/components/form-input';
import { usePage } from '@ozmos/viper-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PasswordConfirmation } from '@/components/password-confirmation';
import { route } from '@/pages/routes';
import { toast } from 'sonner';
import { Heading } from '@/components/heading';

export default function Profile() {
  const page = usePage<ViperGen.AppGroupProfileIndex>();

  const { data: user, refetch } = page.useQuery('user');

  const form = page.useForm('updateUser', {
    state: {
      name: user.name,
      email: user.email,
    },
    onSuccess() {
      toast.success('Profile saved!');
      refetch();
    },
  });

  const deleteUser = page.useMutation('deleteUser');

  async function onDelete() {
    try {
      await deleteUser.mutateAsync({});
      window.location.href = route('login');
    } catch {
      toast.error('Something went wrong');
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    form.mutate();
  }

  return (
    <div className="">
      <Heading
        title="Edit Profile"
        description="Update your profile information here"
      />
      <div className="mt-6">
        <form method="post" onSubmit={onSubmit}>
          <div className="flex flex-col gap-6 max-w-sm">
            <FormInput
              id="name"
              label="Name"
              onChange={e =>
                form.setState({ ...form.state, name: e.target.value })
              }
              value={form.state.name}
              error={form.errors.name}
            />
            <FormInput
              id="email"
              label="Email"
              type="email"
              onChange={e =>
                form.setState({ ...form.state, email: e.target.value })
              }
              value={form.state.email}
              error={form.errors.email}
            />
            <div>
              <Button loading={form.isPending}>Save</Button>
            </div>
          </div>
        </form>
      </div>

      <Separator className="my-6" />

      <Heading
        title="Delete Account"
        description="This action is not reversible"
      />

      <div className="mt-4">
        <PasswordConfirmation
          onConfirm={onDelete}
          loading={deleteUser.isPending}
        >
          <Button variant="destructive">Delete my account</Button>
        </PasswordConfirmation>
      </div>
    </div>
  );
}
