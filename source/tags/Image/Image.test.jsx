import test from 'tape';
import { shallow } from 'enzyme';

import Image from './Image';
import rancheriaFallsImage from './assets/rancheria-falls.jpg';


test('<Image src={img} variant="auto" />', (t) => {
  const component = shallow(<Image src={rancheriaFallsImage} variant="auto" />);
  t.ok(component.is('img'), 'tag name');
  t.ok(component.is('.image'), 'tag class');
  t.end();
});
