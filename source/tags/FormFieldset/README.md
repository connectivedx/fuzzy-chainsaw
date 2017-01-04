# Form Fieldset

Creates a `<fieldset>` tag with an optional legend.

If desired, `<fieldset>` and `<legend>` tags can be overridden.

## Props

Property | Function
--- | ---
`className` | Defines css className to add to the component's class list.
`legendText` | String text or false value | `undefined` | Defines text to put on optional `<legend>` tag. If this evalueates `false`, no tag will be emitted. If `tagName` is not `'fieldset'`, a `<div>` will be used unless a value is set on `legendTag`.
`legendTag` | String tagname | `'legend'` | Defines the tag used to any text supplied to `legendText`.
`children` | Defines the children elements passed to the component.