import React from 'react';
import avatar from '@/assets/avatar.png';
import avatarBg from '@/assets/bg4.jpg';
import './mine.scss';

export default function MinePage() {
  return (
    <div className="nine-point-common-pb">
      <div className="my-bg">
        <img className="img-avatar" src={avatar} />
        <img className="img-bg" src={avatarBg} />
      </div>
    </div>
  );
};
