import { useEffect, useState } from 'react';

export default function useTheme(theme) {
  const [appTheme, setAppTheme] = useState(theme);

  useEffect(() => {
    setAppTheme(theme);
  }, [theme]);

  return appTheme;
}
