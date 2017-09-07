export const RichText =
  FcUtils.createBasicComponent({
    name: 'RichText',
    variants: ['default'],
    defaultProps: {
      tagName: 'div',
      variant: 'default'
    }
  });

RichText.pageType = 'content';


export default RichText;
