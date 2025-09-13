import React from 'react';

const Login = React.lazy(() => import('./Login'));

export const routes = [
  {
    path: '/',
    element: <Login />,
  },
];
