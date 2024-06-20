import React from 'react';
import './index.scss'
import { Ellipsis,Image } from 'antd-mobile'

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'

export default function AdvItem(){
  return (
    <div className="adv-item">
      <div className='adv-item-title'>
        <Image src={demoSrc}/>
        <div className={'title'}><span className={'whiteFont smaller'}>47人已点赞</span></div>
        <div className={'icon vip'}></div>
      </div>
      <Ellipsis className='adv-item-title dom-pb dom-pt smaller' direction='end' content={"潜意识测试潜意识测试潜意识测试潜意识测试"} />
      <div className={'redFont bold'}>￥29.90</div>
    </div>
  );
};
