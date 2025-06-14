import { useAppearance } from '@/hooks/use-appearance';
import { Monitor, Moon, Sun } from 'lucide-react';
import { TabsList, Tabs, TabsTrigger } from '@/components/ui/tabs';

const tabs = [
  { value: 'light', Icon: Sun, label: 'Light' },
  { value: 'dark', Icon: Moon, label: 'Dark' },
  { value: 'system', Icon: Monitor, label: 'System' },
] as const;

export function AppearanceTabs() {
  const { appearance, updateAppearance } = useAppearance();

  return (
    <Tabs defaultValue={appearance}>
      <TabsList>
        {tabs.map(({ value, Icon, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            onClick={() => updateAppearance(value)}
          >
            <Icon />
            <span>{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
