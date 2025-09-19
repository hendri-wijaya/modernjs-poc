import React from 'react';

const App = React.lazy(() => import('./App'));

export const routes = [
  {
    path: '/',
    element: <App />,
  },
];
