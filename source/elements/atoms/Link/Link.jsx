export const Link =
  FcUtils.createBasicComponent({
    name: 'link',
    variants: ['default', 'cta'],
    defaultProps: {
      tagName: 'a',
      variant: 'default'
    }
  });


export default Link;
