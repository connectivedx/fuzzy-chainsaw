import Image from '@tags/Image/Image';
import Heading from '@tags/Heading/Heading';
import Rhythm from '@tags/Rhythm/Rhythm';

import { Media } from '@tags';
import randySavage from './assets/randy-savage.jpg';


export default [{
  name: 'media to the left',
  component: (
    <Media>
      <Media.Figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media.Figure>

      <Media.Body>
        <Rhythm size="small">
          <Heading level="h3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media.Body>
    </Media>
  )
}, {
  name: 'media to the right',
  component: (
    <Media>
      <Media.Body>
        <Rhythm size="small">
          <Heading level="h3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media.Body>

      <Media.Figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media.Figure>
    </Media>
  )
}, {
  name: 'media align middle',
  component: (
    <Media align="middle">
      <Media.Figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media.Figure>

      <Media.Body>
        <Rhythm size="small">
          <Heading level="h3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media.Body>
    </Media>
  )
}, {
  name: 'media align bottom',
  component: (
    <Media align="bottom">
      <Media.Figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media.Figure>

      <Media.Body>
        <Rhythm size="small">
          <Heading level="h3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media.Body>
    </Media>
  )
}, {
  name: 'media to each side, different alignment',
  component: (
    <Media>
      <Media.Figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media.Figure>

      <Media.Body>
        <Rhythm size="small">
          <Heading level="h3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media.Body>

      <Media.Figure align="bottom">
        <Image src={randySavage} alt="Randy Savage" />
      </Media.Figure>
    </Media>
  )
}, {
  name: 'media nested',
  component: (
    <Media>
      <Media.Figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media.Figure>

      <Media.Figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media.Figure>

      <Media.Body>
        <Rhythm size="large">
          <Rhythm size="small">
            <Heading level="h3">Randy Savage Buddy</Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          </Rhythm>

          <Media>
            <Media.Figure>
              <Image src={randySavage} alt="Randy Savage" />
            </Media.Figure>

            <Media.Body>
              <Rhythm size="small">
                <Heading level="h3">Lorem ipsum dolor sit.</Heading>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam sequi odit hic adipisci, ad consequatur quasi id aspernatur debitis saepe voluptatum veritatis consequuntur quas porro dolor molestiae error iste iusto voluptate nisi atque tempore! Beatae quod debitis modi soluta!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam sequi odit hic adipisci, ad consequatur quasi id aspernatur debitis saepe voluptatum veritatis consequuntur quas porro dolor molestiae error iste iusto voluptate nisi atque tempore! Beatae quod debitis modi soluta!</p>
              </Rhythm>
            </Media.Body>
          </Media>

          <Media>
            <Media.Body>
              <Rhythm size="small">
                <Heading level="h3">Lorem ipsum dolor sit.</Heading>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam sequi odit hic adipisci, ad consequatur quasi id aspernatur debitis saepe voluptatum veritatis consequuntur quas porro dolor molestiae error iste iusto voluptate nisi atque tempore! Beatae quod debitis modi soluta!</p>
              </Rhythm>
            </Media.Body>

            <Media.Figure>
              <Image src={randySavage} alt="Randy Savage" />
            </Media.Figure>

            <Media.Figure align="bottom">
              <Image src={randySavage} alt="Randy Savage" />
            </Media.Figure>
          </Media>
        </Rhythm>
      </Media.Body>
    </Media>
  )
}];
