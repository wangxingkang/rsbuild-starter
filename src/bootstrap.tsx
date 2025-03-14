import { createRouter, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the generated route tree
import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }

  interface StaticDataRouteOption {
    title?: string;
  }
}

const BASE_URL = import.meta.env.BASE_URL;
const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} basepath={BASE_URL} />
    </React.StrictMode>,
  );
}
