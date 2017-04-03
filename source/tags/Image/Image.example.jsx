import Image from './Image';
import rancheriaFallsImage from './assets/rancheria-falls.jpg';

export default [{
  name: 'default',
  component: (
    <Image src={rancheriaFallsImage} variant="auto" />
  )
}];
