import React from 'react';
import './index.scss'
import { Ellipsis,Image } from 'antd-mobile'

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'

export default function RecommendItem(){
  return (
    <div className="recommend-item whiteBg dom-p-all dom-mb domRadius">
      <div className={'recommend-detail dom-mr'}>
        <div className={'bold'}>潜意识测试潜意识测试潜意识测试潜意识测试</div>
        <Ellipsis className='recommend-item-title dom-pb dom-pt greyFont smaller' direction='end' content={"潜意识测试潜意识测试潜意识测试潜意识测试"} />
        <div className={'redFont bold'}>￥29.90</div>
      </div>
      <div className='recommend-item-title'>
        <Image  src={demoSrc}/>
        <div className={'title'}><span className={'whiteFont smaller'}>47人已点赞</span></div>
        <div className={'icon vip'}></div>
      </div>
    </div>
  );
};
