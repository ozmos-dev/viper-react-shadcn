import { cn } from '@/lib/utils';

interface HeadingProps {
  title: string;
  description: string;
  className?: string;
}

export function Heading({ title, description, className }: HeadingProps) {
  return (
    <div className={cn('space-y-1', className)}>
      <h3 className="text-lg/6 font-medium">{title}</h3>
      <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
