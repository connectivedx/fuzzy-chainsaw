import React from 'react';
import Image from 'Tags/Image/Image';
import Heading from 'Tags/Heading/Heading';
import Rhythm from 'Tags/Rhythm/Rhythm';

import randySavage from './assets/randy-savage.jpg';
import { Media, Media_Figure, Media_Body } from './Media';

export default [{
  name: 'media to the left',
  component: (
    <Media>
      <Media_Figure>
        <Image src={randySavage} />
      </Media_Figure>

      <Media_Body>
        <Rhythm size="small">
          <Heading level="3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media_Body>
    </Media>
  ),
  test(t, component) {
    t.equal(component.is('div'), true, 'tag name');
    t.equal(component.is('.media'), true, 'tag class');
    t.equal(component.text(), '<Media_Figure /><Media_Body />', 'text');
    t.end();
  }
}, {
  name: 'media to the right',
  component: (
    <Media>
      <Media_Body>
        <Rhythm size="small">
          <Heading level="3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media_Body>

      <Media_Figure>
        <Image src={randySavage} />
      </Media_Figure>
    </Media>
  ),
  test(t, component) {
    t.equal(component.is('div'), true, 'tag name');
    t.equal(component.is('.media'), true, 'tag class');
    t.equal(component.text(), '<Media_Body /><Media_Figure />', 'text');
    t.end();
  }
}, {
  name: 'media align middle',
  component: (
    <Media align="middle">
      <Media_Figure>
        <Image src={randySavage} />
      </Media_Figure>

      <Media_Body>
        <Rhythm size="small">
          <Heading level="3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media_Body>
    </Media>
  )
}, {
  name: 'media align bottom',
  component: (
    <Media align="bottom">
      <Media_Figure>
        <Image src={randySavage} />
      </Media_Figure>

      <Media_Body>
        <Rhythm size="small">
          <Heading level="3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media_Body>
    </Media>
  )
}, {
  name: 'media to each side, different alignment',
  component: (
    <Media>
      <Media_Figure>
        <Image src={randySavage} />
      </Media_Figure>

      <Media_Body>
        <Rhythm size="small">
          <Heading level="3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media_Body>

      <Media_Figure align="bottom">
        <Image src={randySavage} />
      </Media_Figure>
    </Media>
  )
}, {
  name: 'media nested',
  component: (
    <Media>
      <Media_Figure>
        <Image src={randySavage} />
      </Media_Figure>

      <Media_Figure>
        <Image src={randySavage} />
      </Media_Figure>

      <Media_Body>
        <Rhythm size="large">
          <Rhythm size="small">
            <Heading level="3">Randy Savage Buddy</Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          </Rhythm>

          <Media>
            <Media_Figure>
              <Image src={randySavage} />
            </Media_Figure>

            <Media_Body>
              <Rhythm size="small">
                <Heading level="3">Lorem ipsum dolor sit.</Heading>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam sequi odit hic adipisci, ad consequatur quasi id aspernatur debitis saepe voluptatum veritatis consequuntur quas porro dolor molestiae error iste iusto voluptate nisi atque tempore! Beatae quod debitis modi soluta!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam sequi odit hic adipisci, ad consequatur quasi id aspernatur debitis saepe voluptatum veritatis consequuntur quas porro dolor molestiae error iste iusto voluptate nisi atque tempore! Beatae quod debitis modi soluta!</p>
              </Rhythm>
            </Media_Body>
          </Media>

          <Media>
            <Media_Body>
              <Rhythm size="small">
                <Heading level="3">Lorem ipsum dolor sit.</Heading>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam sequi odit hic adipisci, ad consequatur quasi id aspernatur debitis saepe voluptatum veritatis consequuntur quas porro dolor molestiae error iste iusto voluptate nisi atque tempore! Beatae quod debitis modi soluta!</p>
              </Rhythm>
            </Media_Body>

            <Media_Figure>
              <Image src={randySavage} />
            </Media_Figure>

            <Media_Figure align="bottom">
              <Image src={randySavage} />
            </Media_Figure>
          </Media>
        </Rhythm>
      </Media_Body>
    </Media>
  )
}];
