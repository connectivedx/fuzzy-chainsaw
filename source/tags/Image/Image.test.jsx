import test from 'tape';
import { shallow } from 'enzyme';

import Image from './Image';
import rancheriaFallsImage from './assets/rancheria-falls.jpg';


test('<Image src={imgObject} />', (t) => {
  const component = shallow(<Image tagName="p" src={rancheriaFallsImage} alt="Rancheria Falls" />);
  t.ok(component.is('img'), 'tag name');
  t.ok(component.is('.image'), 'tag class');
  t.ok(component.is('.image--default'), 'variant class');
  t.end();
});

test('<Image src={imgString} />', (t) => {
  const component = shallow(<Image src={rancheriaFallsImage.toString()} alt="Rancheria Falls" />);
  t.ok(component.is('img'), 'tag name');
  t.ok(component.is('.image'), 'tag class');
  t.ok(component.is('.image--default'), 'variant class');
  t.end();
});
