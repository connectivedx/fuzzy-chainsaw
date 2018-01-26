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

import Brand from './Brand';

export default [{
  name: 'Default variant',
  component: (
    <Brand />
  )
}, {
  name: 'Compact variant',
  component: (
    <Brand variant="compact" />
  )
}];
