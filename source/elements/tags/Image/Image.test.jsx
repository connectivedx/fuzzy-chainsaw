import test from 'tape';
import { shallow } from 'enzyme';

import Image from './Image';


test('<Image src={imgString} />', (t) => {
  const component = shallow(<Image src="image.jpg" alt="Rancheria Falls" />);
  t.ok(component.is('img'), 'tag name');
  t.ok(component.hasClass('Image'), 'tag class');
  t.ok(component.hasClass('Image--default'), 'variant class');
  t.end();
});
