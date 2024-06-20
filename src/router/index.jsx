import React from 'react';
import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Tabbar from '@/components/tabbar';
import NotFound from '@/components/notFound';

const Home = lazy(() => import('@/pages/homePage'));
const Category = lazy(() => import('@/pages/categoryPage'));
const Member = lazy(() => import('@/pages/memberPage'));
const Mine = lazy(() => import('@/pages/minePage'));
const More = lazy(() => import('@/pages/otherPage'));
// 路由懒加载，需配合Suspense使用
const lazyLoad = (children) => {
  return <Suspense fallback={''}>{children}</Suspense>;
};

const AppRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <Tabbar />,
      children: [
        {
          index: true,
          element: lazyLoad(<Home />),
        },
        {
          path: 'category',
          element: lazyLoad(<Category />),
        },
        {
          path: 'member',
          element: lazyLoad(<Member />),
        },
        {
          path: 'mine',
          element: lazyLoad(<Mine />),
        },
      ],
    },
    { path: '/article/detail/:id', element: lazyLoad(<More />) },
    { path: '*', element: <NotFound /> },
  ]);
};

export default AppRouter;
