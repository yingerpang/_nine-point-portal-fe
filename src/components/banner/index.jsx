import React,{useState} from 'react';
import { Swiper } from 'antd-mobile'
import './banner.scss'

export default  function Banner() {
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div className={'content'} style={{ background: color }}>
        {index + 1}
      </div>
    </Swiper.Item>
  ))
  return (
    <Swiper slideSize={70} trackOffset={15} loop stuckAtBoundary={false}>
      {items}
    </Swiper>
  );
};
