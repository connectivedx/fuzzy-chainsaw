# Grid

## Props

Property | Default | Valid Values | Description
--- | --- | --- |:---
`tagName` | Defines the html tag used for the component.
`variant` | `'default'` | 'default', 'auto-fit', 'auto-fill', | Defines the 'Grid' component variation used in the CSS, defaults to 'default'. 
`hSpace` | 16px | 'px' | Defines how much horizontal spacing between columns
`vSpace` | 16px | 'px' | Defines how much vertical spacing between columns
`count`  | 12 | 'int' |Defines grid's column count (12 is default)
`size`   | 10rem | 'px', 'em', 'rem' | Defines the grid's fill/fit target dimension
`className` | &nbsp; | any string | Defines CSS className to add to the component's class list.
`children` | &nbsp; |  &nbsp; | Defines the child elements passed to the component. 


# Grid__Column

## Props

Property | Default | Valid Values | Description
--- | --- | --- |:---
`tagName` | Defines the html tag used for the component.
`variant` | `'default'` | 'default', 'fit', 'fill', | Defines the 'Grid' component variation used in the CSS, defaults to 'default'. 
`size` | 12 | 'int' | Defines the size of a column. 
`order` | 0 | 'int' | Defines a column's order in context of all other column siblings
`className` | &nbsp; | any string | Defines CSS className to add to the component's class list.
`children` | &nbsp; |  &nbsp; | Defines the child elements passed to the component. 
