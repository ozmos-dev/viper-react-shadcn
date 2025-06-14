import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      toastOptions={{
        className:
          'data-[type=success]:!border-b-2 data-[type=success]:!border-b-emerald-400 data-[type=error]:!border-b-2 data-[type=error]:!border-b-rose-400',
      }}
      {...props}
    />
  );
};

export { Toaster };
