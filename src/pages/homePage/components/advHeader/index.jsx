import React from 'react';
import './index.scss'

export default function AdvHeader({title="",description="",extraText='更多',handleClick}){
  return (
    <div className="adv-item-header">
      <div className={'adv'}><div className={'title-box small bold'}>{title}<div className={'description smaller greyFont dom-pl'}>{description}</div></div></div>
      <div className={`greyFont`} onClick={handleClick}>{extraText}</div>
    </div>
  );
};
