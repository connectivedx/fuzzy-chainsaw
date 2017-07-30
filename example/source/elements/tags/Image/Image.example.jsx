import { Image } from '@tags';

import imageSrc from './assets/rancheria-falls.jpg';
import imageSrcMd from './assets/rancheria-falls-md.jpg';
import imageSrcLg from './assets/rancheria-falls-lg.jpg';


export default [{
  name: 'Default image behavior',
  component: (
    <Image src={imageSrc} alt="Rancheria Falls" />
  )
}, {
  name: 'Auto sizing variant',
  component: (
    <Image src={imageSrc} variant="auto" alt="Rancheria Falls" />
  )
}, {
  name: 'Default Image with srcset',
  component: (
    <Image
      src={imageSrc}
      srcSet={`${imageSrcMd} 720w, ${imageSrcLg} 1440w`}
      variant="auto"
      alt="Rancheria Falls"
    />
  )
}];
