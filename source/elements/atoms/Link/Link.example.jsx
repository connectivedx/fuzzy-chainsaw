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

import Link from './Link';

export default [{
  name: 'Default styling',
  component: (
    <Link href="#slime">Lorem ipsum</Link>
  )
}, {
  name: 'Cta styling',
  component: (
    <Link href="#slime" variant="cta">Click me</Link>
  )
}];
