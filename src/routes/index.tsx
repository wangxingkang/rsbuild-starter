import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  staticData: {
    title: '首页',
  },
});

function RouteComponent() {
  return <div>首页</div>;
}
