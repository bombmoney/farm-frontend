import { useEffect, useState } from 'react';

const useIsNightMode = () => {
  const key = 'theme';
  const light = 'light';
  const dark = 'dark';
  const defaultTheme = dark;
  let theme;
  if (localStorage) {
    try {
      theme = localStorage.getItem(key);
    } catch (e) {}
  }

  theme = theme ?? defaultTheme;

  const [isNightMode, setNightMode] = useState(theme === dark);

  useEffect(() => {
    try {
      localStorage.setItem(key, isNightMode ? dark : light);
    } catch (e) {}
  }, [isNightMode]);

  return { isNightMode, setNightMode };
};

export default useIsNightMode;
