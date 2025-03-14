import { getPageTitle } from '@/utils/title';
import { useTitle } from '@rcuse/core';
import { useLocation, useRouter } from '@tanstack/react-router';

const BASE_URL = import.meta.env.BASE_URL;

export function usePageTitle() {
  const { pathname } = useLocation();
  const { getMatch } = useRouter();

  let path = `/${pathname.replace(new RegExp(`^${BASE_URL}?`), '')}`;
  if (path.length > 1) {
    path = path.replace(/\/$/, '');
  }

  const match = getMatch(path);

  useTitle(getPageTitle(match?.staticData?.title));
}
