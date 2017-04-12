import Image from './Image';
import rancheriaFallsImage from './assets/rancheria-falls.jpg';

export default [{
  name: 'Default image behavior',
  component: (
    <Image src={rancheriaFallsImage} alt="Rancheria Falls" />
  )
}, {
  name: 'Auto sizing variant',
  component: (
    <Image src={rancheriaFallsImage} variant="auto" alt="Rancheria Falls" />
  )
}];
