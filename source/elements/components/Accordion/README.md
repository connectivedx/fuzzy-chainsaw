# Accordion
Accepts children as content containers to be transposes into HTML5 detail / summary accordion sections.

## Props

Property | Function
--- | ---
`tagName` | Defines the html tag used for the component.
`variant` | Defines which variant of the component will be used.
`className` | Defines css className to add to the component's class list.
`children` | Defines the children elements passed to the component.
`singly` | Defines if single (true) or multi (false) sections can opened at any given time (default is multi-sections, aka false).


## Children Props

Property | Function
--- | ---
`title` | Defines the heading text for an accordion section.
`level` | Defines the heading font size for an accordion section.
`weight` | Defines the heading font weight for an accordion section.
`icon` | Defines a stateless icon to be used for an accordion section.
`openIcon` | Defines the open state icon for an accordion section.
`closeIcon` | Defines the close icon for an accordion section.