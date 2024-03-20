import { useEffect, useState } from 'react';

export default function useApp(app) {
  const [appName, setAppName] = useState(app);

  useEffect(() => {
    setAppName(app);
  }, [app]);

  return appName;
}
