import Heading from '@tags/Heading/Heading';
import Wrapper from '@tags/Wrapper/Wrapper';

import Color from './Color';

export default [{
  name: 'Default styling',
  component: (
    <section>
      <Heading tagName="h2">General Colors</Heading>
      <Wrapper size="wide" className="Grid--swatch">
        <Color
          variant="swatch"
          colorName="color-red"
          colorValues={[{
            name: 'Red',
            hex: '#fa0000',
            css: '--color-red'
          }]}
        />
        <Color
          variant="swatch"
          colorName="color-blue"
          colorValues={[{
            name: 'Blue',
            hex: '#0000fa',
            css: '--color-blue'
          }]}
        />
      </Wrapper>

      <Heading tagName="h2">Generic Theme</Heading>
      <Wrapper size="wide" className="Grid--swatch">
        <Color
          variant="swatch"
          colorName="generic-color-red"
          colorValues={[{
            name: 'Theme Red',
            hex: '#a40000',
            css: '--generic-color-red'
          }]}
        />
        <Color
          variant="swatch"
          colorName="generic-color-blue"
          colorValues={[{
            name: 'Theme Blue',
            hex: '#003346',
            css: '--generic-color-blue'
          }]}
        />
        <Color
          variant="swatch"
          colorName="generic-color-green"
          colorValues={[{
            name: 'Theme Green',
            hex: '#0000fa',
            css: '--generic-color-blue'
          }]}
        />
      </Wrapper>

      <Heading tagName="h2">Grayscale</Heading>
      <Wrapper size="wide" className="Grid--swatch">
        <Color
          variant="swatch"
          colorName="color-shade--00"
          colorValues={[{
            name: 'Gray (0%)',
            hex: '#FFFFFF',
            css: '--color-shade--00'
          }]}
        />
        <Color
          variant="swatch"
          colorName="color-shade--03"
          colorValues={[{
            name: 'Gray (3%)',
            hex: '#F7F7F7',
            css: '--color-shade--03'
          }]}
        />
        <Color
          variant="swatch"
          colorName="color-shade--05"
          colorValues={[{
            name: 'Gray (5%)',
            hex: '#F2F2F2',
            css: '--color-shade--05'
          }]}
        />
        <Color
          variant="swatch"
          colorName="color-shade--10"
          colorValues={[{
            name: 'Gray (10%)',
            hex: '#E8E8E8',
            css: '--color-shade--10'
          }]}
        />
        <Color
          variant="swatch"
          colorName="color-shade--25"
          colorValues={[{
            name: 'Gray (25%)',
            hex: 'BFBFBF',
            css: '--color-shade--25'
          }]}
        />
        <Color
          variant="swatch"
          colorName="color-shade--50"
          colorValues={[{
            name: 'Gray (50%)',
            hex: '#8c8c8c',
            css: '--color-shade--50'
          }]}
        />
        <Color
          variant="swatch"
          colorName="color-shade--75"
          colorValues={[{
            name: 'Gray (75%)',
            hex: '#4b4b4b',
            css: '--color-shade--75'
          }]}
        />
        <Color
          variant="swatch"
          colorName="color-shade--90"
          colorValues={[{
            name: 'Gray (90%)',
            hex: '#2b2b2b',
            css: '--color-shade--90'
          }]}
        />
        <Color
          variant="swatch"
          colorName="color-shade--100"
          colorValues={[{
            name: 'Gray (100%)',
            hex: '#000000',
            css: '--color-shade--100'
          }]}
        />
      </Wrapper>

      <Heading tagName="h2">Grayscale Aliases</Heading>
      <Wrapper size="wide" className="Grid--swatch">
        <Color
          variant="swatch"
          colorName="color-white"
          colorValues={[{
            name: 'White',
            hex: '#FFFFFF',
            css: '--color-white'
          }]}
        />
        <Color
          variant="swatch"
          colorName="color-gray"
          colorValues={[{
            name: 'Gray',
            hex: '#8c8c8c',
            css: '--color-gray'
          }]}
        />
        <Color
          variant="swatch"
          colorName="color-black"
          colorValues={[{
            name: 'Black',
            hex: '#000000',
            css: '--color-black'
          }]}
        />
      </Wrapper>
    </section>
  )
}];
