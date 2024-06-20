import React from 'react';
import Banner from '@/components/banner'
import useGetLabelList from '@/useHooks/useGetLabelList';
import { SearchBar} from 'antd-mobile'

import AdvHeader from './components/advHeader'
import HotItem from './components/advItem'
import RecommendItem from '@/components/recommendItem'
import './index.scss'

export default function HomePage(){

  return (
    <div className="nine-point-common-pb home-content-wrapper">
      <div className={'dom-ml dom-mr dom-pt dom-pb search-bar-box'}>
        <div>
          <span>九点趣测</span>
          <span>关注领福利</span>
        </div>
        <SearchBar placeholder='请输入内容' />
      </div>
      <Banner></Banner>
      <div className={'dom-m-all'}>
        <div className={'evaluation-box dom-mb whiteBg domRadius'}>
          <div className='evaluation-item'><div className='icon'></div><label>全面评估</label></div>
          <div className='evaluation-item'><div className='icon'></div><label>健康测评</label></div>
          <div className='evaluation-item'><div className='icon'></div><label>性格测试</label></div>
          <div className='evaluation-item'><div className='icon'></div><label>职场测试</label></div>
        </div>
        <div className={'home-content-advertising dom-mb domRadius'}>
          情绪色彩测试
        </div>
        <div className={'home-content-advertising hot dom-mb whiteBg domRadius'}>
          <AdvHeader title={'热卖爆款'} description={'不容错过的精彩测评'}/>
          <div className={'adv-list dom-mt'}>
            <HotItem/>
            <HotItem/>
          </div>
        </div>
        <div className={'home-content-advertising hot dom-mb  domRadius'}>
          <AdvHeader title={'全面评估'} description={'用新的视角遇见更好的自己'}/>
          <div className={'adv-list dom-mt'}>
            <HotItem/>
            <HotItem/>
          </div>
        </div>
        <div className={'home-content-recommend dom-mb'}>
          <AdvHeader title={'精选推荐'} extraText={'更多内容'}/>
          <div className={'recommend-list dom-mt'}>
            <RecommendItem></RecommendItem>
            <RecommendItem></RecommendItem>
          </div>
        </div>
      </div>
    </div>
  );
};
