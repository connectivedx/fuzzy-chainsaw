/*
  OPTIONS:
  The following options are available for Component examples:
    - No Padding variant (noPadding: true)
    - Dark Background variant (darkBackground: true)

  Example:
    ```
      export default [{
        name: 'Default styling',
        component: (
          <Component>Lorem ipsum</Component>
        ),
        options: {
          noPadding: true,
          darkBackground: true
        }
      },
    ```
*/

import Image from './Image';
import imageSrc from './assets/rancheria-falls.jpg';
import imageSrcMd from './assets/rancheria-falls-md.jpg';
import imageSrcLg from './assets/rancheria-falls-lg.jpg';

export default [{
  name: 'Default image behavior',
  component: (
    <Image src={imageSrc} alt="Rancheria Falls" />
  )
}, {
  name: 'Auto sizing variant',
  component: (
    <Image src={imageSrc} variant="auto" alt="Rancheria Falls" />
  )
}, {
  name: 'Default Image with srcset',
  component: (
    <Image
      src={imageSrc}
      srcSet={`${imageSrcMd} 720w, ${imageSrcLg} 1440w`}
      variant="auto"
      alt="Rancheria Falls"
    />
  )
}];
