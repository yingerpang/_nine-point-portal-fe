import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppOutline,
  FillinOutline,
  UserOutline,
  TagOutline,
} from 'antd-mobile-icons';
import { TabBar } from 'antd-mobile';
import { Outlet } from 'react-router-dom';
import './tabbar.scss';
import useDocumentTitle from '@/useHooks/useDocumentTitle';

const FixedBottomNavigation = () => {
  const tabs = [
    {
      path: '/',
      title: '测评大厅',
      icon: <AppOutline />,
    },
    {
      path: '/category',
      title: '全部分类',
      icon: <TagOutline />,
    },
    {
      path: '/member',
      title: '会员中心',
      icon: <FillinOutline />,
    },
    {
      path: '/mine',
      title: '我的测评',
      icon: <UserOutline />,
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const index = tabs.findIndex((item) => item.path === pathname);
  useDocumentTitle(tabs[index]?.title);
  // 路由跳转
  const setRouteActive = (path) => {
    navigate(path);
  };
  return (
    <>
      <Outlet />
      <TabBar
        className="tabbar-footer tabbar-pb"
        activeKey={pathname}
        onChange={(value) => {
          setRouteActive(value);
        }}>
        {tabs.map((item) => (
          <TabBar.Item key={item.path} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
};
export default FixedBottomNavigation;
