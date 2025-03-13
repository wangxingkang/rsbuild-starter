import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/map/')({
  component: lazyRouteComponent(() => import('./-views/map')),
  staticData: {
    title: '全景地图',
  },
});
