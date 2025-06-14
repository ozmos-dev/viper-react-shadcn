import { Theme, themes, useTheme } from '@/hooks/use-theme';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ThemeSelector() {
  const { theme, updateTheme } = useTheme();

  return (
    <Select value={theme} onValueChange={updateTheme}>
      <SelectTrigger>
        <SelectValue placeholder="Default" />
      </SelectTrigger>
      <SelectContent>
        {themes.map(themeOption => (
          <SelectItem key={themeOption} value={themeOption}>
            {themeOption}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
