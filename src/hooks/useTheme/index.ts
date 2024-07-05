import { useContext, useEffect, useState } from 'react';
import { AdminContext } from '@/contexts';
import { ThemeMode } from '@/types';
import { ThemeDark, ThemeLight } from '@/setting';
import { ThemeConfig } from 'antd';
import { UserThemePreferenceKey } from '@/consts.ts';

export const useTheme = () => {
  const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const { setting } = useContext(AdminContext);
  const userThemePreference = localStorage.getItem(UserThemePreferenceKey) || setting.theme;
  const [theme, setTheme] = useState<ThemeMode>(userThemePreference as ThemeMode);
  const [config, setConfig] = useState<ThemeConfig>(theme === 'dark' ? ThemeDark : ThemeLight);

  const switchTheme = (theme: ThemeMode) => {
    setTheme(theme);
  };

  const listenColorScheme = () => {
    colorScheme.addEventListener('change', (event) => {
      setConfig(event.matches ? ThemeDark : ThemeLight);
    });
  };
  const removeListenColorScheme = () => {
    colorScheme.removeEventListener('change', () => {
    });
  };

  useEffect(() => {
    if (theme === 'auto') {
      setConfig(colorScheme.matches ? ThemeDark : ThemeLight);
      document.body.setAttribute('data-theme', colorScheme.matches ? 'dark' : 'light');
      listenColorScheme();
    } else {
      setConfig(theme === 'dark' ? ThemeDark : ThemeLight);
      document.body.setAttribute('data-theme', theme as string);
      removeListenColorScheme();
    }
    return () => {
      removeListenColorScheme();
    };
  }, [theme, config]);

  return {
    theme,
    config,
    switchTheme
  };
};