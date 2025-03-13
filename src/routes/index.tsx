import { createFileRoute } from '@tanstack/react-router';
import { getEnvValue } from '@/utils/env';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  staticData: {
    title: '首页',
  },
});

function RouteComponent() {
  return <div>首页 {getEnvValue('PUBLIC_API_BASE_URL')}</div>;
}
