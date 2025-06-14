import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FormInput } from '@/components/form-input';
import { Button } from '@/components/ui/button';
import { usePage } from '@ozmos/viper-react';

interface PasswordConfirmationProps {
  loading?: boolean;
  onConfirm: () => void;
  children: React.ReactNode;
}

export function PasswordConfirmation({
  loading,
  onConfirm,
  children,
}: PasswordConfirmationProps) {
  const [open, setOpen] = useState(false);

  const page = usePage<ViperGen.AppGroupLayout>();

  const { state, setState, errors, isPending, mutateAsync, reset } =
    page.useForm('confirmPassword', {
      state: {
        password: '',
      },
    });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await mutateAsync();
    await onConfirm();
    reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Password Confirmation</DialogTitle>
          <DialogDescription>
            Please enter your password to continue.
          </DialogDescription>
        </DialogHeader>

        <form id="confirm-password-form" method="post" onSubmit={handleSubmit}>
          <FormInput
            id="password"
            label=""
            type="password"
            value={state.password}
            onChange={e => setState({ ...state, password: e.target.value })}
            error={errors.password}
          />
        </form>

        <DialogFooter>
          <Button
            loading={loading || isPending}
            type="submit"
            form="confirm-password-form"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
