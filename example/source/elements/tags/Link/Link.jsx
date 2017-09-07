export const Link =
  FcUtils.createBasicComponent({
    name: 'Link',
    variants: ['default', 'cta'],
    defaultProps: {
      tagName: 'a',
      variant: 'default'
    }
  });

Link.pageType = 'action';


export default Link;
