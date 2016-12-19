# Rhythm

Rhythm is used to define vertical spacing between elements because CSS reset is used. Adds `margin-top` to child elements, except for the first element.

`<Rhythm deep="false">` will only add `margin-top` to direct descendants

`<Rhythm deep="true">` will add `margin-top` to all descendants

## Props

Property | Default | Valid Values | Description
--- | --- | --- |:---
`className` | &nbsp; | any string | Defines CSS `className` to add to the component's class list.
`size` | `'default'` | `'default'`, `'small'`, `'large'` | Defines the spacing
`deep` | `'false'` | `'false'`, `'true'` | Defines if rhythm is inherited by childern
`children` | &nbsp; |  &nbsp; | Defines the child elements passed to the component.