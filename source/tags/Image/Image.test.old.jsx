import Image from './Image';
import rancheriaFallsImage from './assets/rancheria-falls.jpg';

export default [{
  name: 'default',
  component: (
    <Image src={rancheriaFallsImage} variant="auto" />
  ),
  test(t, component) {
    t.equal(component.is('img'), true, 'tag name');
    t.equal(component.is('.image'), true, 'tag class');
    t.end();
  }
}];
