# Heading

`<Heading>` should be used in place of headers (h1, h2, h3, h4, h5, h6)

## Props

These are the properties that can be passed to the `<Heading />` React component)

Will default to a `h1` if  `level` and `tagName` are both undefined.

Property | Default | Valid Values | Description
--- | --- | --- |:---
`tagName` |  &nbsp; | any HTML tag | Defines the component tagName.
`variant` |  `h1` | `thin`, `medium` | Defines the component variation used in the CSS.
`level` | &nbsp; | `1`, `2`, `3`, `4`, `5`, `6` | Defindes the size of the heading
`className` | &nbsp; | any string | Defines CSS `className` to add to the component's class list.
`children` | &nbsp; |  &nbsp; | Defines the child elements passed to the component.
