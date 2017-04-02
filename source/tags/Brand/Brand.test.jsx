import Brand from './Brand';

export default [{
  name: 'default',
  component: (
    <Brand />
  ),
  test(t, component) {
    t.equal(component.is('div'), true, 'tag name');
    t.equal(component.is('.brand'), true, 'tag class');
    t.equal(component.is('.brand--full'), true, 'variant class');
    t.end();
  }
}, {
  name: 'compact',
  component: (
    <Brand variant="compact" />
  ),
  test(t, component) {
    t.equal(component.is('div'), true, 'tag name');
    t.equal(component.is('.brand'), true, 'tag class');
    t.equal(component.is('.brand--compact'), true, 'variant class');
    t.end();
  }
}];
