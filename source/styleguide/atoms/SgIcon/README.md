# Icon

Icons represent an instance of `<use xlink:href="#icon" />` which inserts a referance to the `svg symbol` in its place.

Icons are named and defined in the `<IconSet>` tag

## Props

These are the properties that can be passed to the `<Icon />` React component

Property | Default | Valid Values | Description
--- | --- | --- |:---
`className` | &nbsp; | any string | Defines CSS `className` to add to the component's class list.
`name`  | &nbsp; | any valid icon name | Defines the name of the icon defined in `<IconSet />`
`size` | `'default'` | `'default'`, `'small'`, `'large'`, `'wide'` | Defines size of image