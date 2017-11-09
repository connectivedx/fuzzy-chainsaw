# Tabs
Accepts children (any node type) as content containers to be transposes into horizontal or vertical tabs.

Horizontal tab systems have top and bottom alignment variations, while vertical tab systems have left and right alignment variations;

## Props

Property | Function
--- | ---
`tagName` | Defines the html tag used for the component.
`variant` | Defines which variant of the component will be used (horizontal--top, horizontal--bottom, vertical--left or vertical--right).
`className` | Defines css className to add to the component's class list.
`children` | Defines the children elements passed to the component.


## Children Props

Property | Function
--- | ---
`title` | Defines the tab's heading text.
`level` | Defines the tab's heading font size.
`weight` | Defines the tab's heading font weight (bold, medium, thin).