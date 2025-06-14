import { Heading } from '@/components/heading';
import { useBreadcrumb } from '@/hooks/use-breadcrumb';
import { AppearanceTabs } from '@/components/appearance-tabs';

export default function Appearance() {
  useBreadcrumb({ id: 'appearance', label: 'Appearance' });

  return (
    <div>
      <Heading
        title="Appearance Settings"
        description="Update your account's appearance settings"
      />

      <div className="mt-6">
        <AppearanceTabs />
      </div>
    </div>
  );
}
