import { ComponentProps } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

interface Props extends ComponentProps<'input'> {
  label: string;
  id: string;
  error?: string;
}

export function FormInput({ label, id, error, ...props }: Props) {
  return (
    <div className="grid gap-3">
      <Label htmlFor={id}>{label}</Label>
      <Input
        {...props}
        className={cn(
          'bg-card',
          { 'border-rose-600': !!error },
          props.className,
        )}
      />
      {error && <p className="text-rose-600 text-sm">{error}</p>}
    </div>
  );
}
