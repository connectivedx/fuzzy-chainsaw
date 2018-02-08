# List

`<List>` should be used in place of lists (ul, ol, dl)

## Props

These are the properties that can be passed to the `<List />` React component)

Will default to a `ul` if  `variant` and `tagName` are both undefined.

Property | Default | Valid Values | Description
--- | --- | --- |:---
`tagName` |  &nbsp; | any HTML tag | Defines the component tagName.
`variant` |  `unordered` (`ul`) | `ordered` (`ol`), `definition` (`dl`), `blank` (`ul`) | Defines the component variation used in the CSS.
`className` | &nbsp; | any string | Defines CSS `className` to add to the component's class list.
`children` | &nbsp; |  &nbsp; | Defines the child elements passed to the component.


# List__item

`<List__item>` should be used in place of list items (li, dt, dd)

## Props

These are the properties that can be passed to the `<List__item />` React component)

Will default to a `li` if  `variant` and `tagName` are both undefined.

Property | Default | Valid Values | Description
--- | --- | --- |:---
`tagName` |  &nbsp; | any HTML tag | Defines the component tagName.
`variant` |  `item` (`li`) | `description` (`dd`), `term` (`dt`) | Defines the component variation used in the CSS.
`className` | &nbsp; | any string | Defines CSS `className` to add to the component's class list.
`children` | &nbsp; |  &nbsp; | Defines the child elements passed to the component.
