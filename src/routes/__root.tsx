import { createRootRoute, Outlet } from '@tanstack/react-router';
import { usePageTitle } from '@/hooks/usePageTitle';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  usePageTitle();

  return (
    <Outlet />
  );
}
