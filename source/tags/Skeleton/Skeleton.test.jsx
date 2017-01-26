import React from 'react';
import Skeleton from './Skeleton';
import rancheriaFallsImage from './assets/rancheria-falls.jpg';

export default [{
  name: 'default',
  component: (
    <Skeleton title="Super Test Page">
      Oh, Hello
    </Skeleton>
  )
}, {
  name: 'responsive image test',
  component: (
    <Skeleton title="big responsive image test page">
      <img src={rancheriaFallsImage.src} srcSet={rancheriaFallsImage.srcSet} width="100%" />
    </Skeleton>
  )
}];
