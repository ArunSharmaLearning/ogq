import { useMemo } from 'react';
import { useRouter as nextRouter, usePathname } from 'next/navigation';

// ----------------------------------------------------------------------

export function useRouter() {
  const pathname = usePathname()
  const router = nextRouter();

  const navigate = (href, options) => {
    if (options && options.replace) {
      router.replace(href);
    } else {
      router.push(href);
    }
  };

  const navigation = useMemo(
    () => ({
      back: () => router.back(),
      forward: () => router.forward(),
      reload: () => window.location.reload(),
      pathname: () => pathname,
      push: (href) => navigate(href),
      replace: (href) => navigate(href, { replace: true }),
    }),
    [router]
  );

  return navigation;
}
