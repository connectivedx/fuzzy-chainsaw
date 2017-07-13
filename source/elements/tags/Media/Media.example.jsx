import Image from 'Tags/Image/Image';
import Heading from 'Tags/Heading/Heading';
import Rhythm from 'Tags/Rhythm/Rhythm';

import randySavage from './assets/randy-savage.jpg';
import {
  Media,
  Media__figure,
  Media__body
} from './Media';


export default [{
  name: 'media to the left',
  component: (
    <Media>
      <Media__figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media__figure>

      <Media__body>
        <Rhythm size="small">
          <Heading level="h3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media__body>
    </Media>
  )
}, {
  name: 'media to the right',
  component: (
    <Media>
      <Media__body>
        <Rhythm size="small">
          <Heading level="h3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media__body>

      <Media__figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media__figure>
    </Media>
  )
}, {
  name: 'media align middle',
  component: (
    <Media align="middle">
      <Media__figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media__figure>

      <Media__body>
        <Rhythm size="small">
          <Heading level="h3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media__body>
    </Media>
  )
}, {
  name: 'media align bottom',
  component: (
    <Media align="bottom">
      <Media__figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media__figure>

      <Media__body>
        <Rhythm size="small">
          <Heading level="h3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media__body>
    </Media>
  )
}, {
  name: 'media to each side, different alignment',
  component: (
    <Media>
      <Media__figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media__figure>

      <Media__body>
        <Rhythm size="small">
          <Heading level="h3">Randy Savage Buddy</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
        </Rhythm>
      </Media__body>

      <Media__figure align="bottom">
        <Image src={randySavage} alt="Randy Savage" />
      </Media__figure>
    </Media>
  )
}, {
  name: 'media nested',
  component: (
    <Media>
      <Media__figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media__figure>

      <Media__figure>
        <Image src={randySavage} alt="Randy Savage" />
      </Media__figure>

      <Media__body>
        <Rhythm size="large">
          <Rhythm size="small">
            <Heading level="h3">Randy Savage Buddy</Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facilis accusantium dolorum deserunt rem ex voluptas impedit doloribus facere, velit, possimus! Aliquid amet, corrupti cumque quae perferendis eos recusandae, nam non dicta velit rem enim vitae! Facere, aliquid inventore reiciendis.</p>
          </Rhythm>

          <Media>
            <Media__figure>
              <Image src={randySavage} alt="Randy Savage" />
            </Media__figure>

            <Media__body>
              <Rhythm size="small">
                <Heading level="h3">Lorem ipsum dolor sit.</Heading>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam sequi odit hic adipisci, ad consequatur quasi id aspernatur debitis saepe voluptatum veritatis consequuntur quas porro dolor molestiae error iste iusto voluptate nisi atque tempore! Beatae quod debitis modi soluta!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam sequi odit hic adipisci, ad consequatur quasi id aspernatur debitis saepe voluptatum veritatis consequuntur quas porro dolor molestiae error iste iusto voluptate nisi atque tempore! Beatae quod debitis modi soluta!</p>
              </Rhythm>
            </Media__body>
          </Media>

          <Media>
            <Media__body>
              <Rhythm size="small">
                <Heading level="h3">Lorem ipsum dolor sit.</Heading>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam sequi odit hic adipisci, ad consequatur quasi id aspernatur debitis saepe voluptatum veritatis consequuntur quas porro dolor molestiae error iste iusto voluptate nisi atque tempore! Beatae quod debitis modi soluta!</p>
              </Rhythm>
            </Media__body>

            <Media__figure>
              <Image src={randySavage} alt="Randy Savage" />
            </Media__figure>

            <Media__figure align="bottom">
              <Image src={randySavage} alt="Randy Savage" />
            </Media__figure>
          </Media>
        </Rhythm>
      </Media__body>
    </Media>
  )
}];
