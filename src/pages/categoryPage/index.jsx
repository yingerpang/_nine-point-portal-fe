import React, { useState,useEffect } from 'react';
import { SideBar } from 'antd-mobile'
import RecommendItem from '@/components/recommendItem'
import './category.scss';
export default function Category(){
  const [tabs,setTabs]= useState([])
  for (let i = 0;i<20;i++){
    tabs.push({
      key: 'key'+(i+1),
      title: '选项'+(i+1),
    })
  }
  useEffect(()=>{
    setTabs(tabs)
  },[tabs])
  return (
    <div className="category-content-wrapper">
      <div className={'cate-menu'}>
        <SideBar>
          {tabs?.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </div>
      <div className={'cate-list dom-m-all'}>
        <RecommendItem/>
      </div>
    </div>
  );
};
