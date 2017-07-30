import { PlaceholderSvg } from '@tags';


export default [{
  name: 'Default',
  component: (
    <PlaceholderSvg />
  )
},
{
  name: 'With all available props passed in',
  component: (
    <PlaceholderSvg
      width={2000}
      height="600"
      fontSize="200%"
      fontFamily="monospace"
      fontWeight="normal"
      imgColor="tomato"
      textColor="bisque"
      text="I’m an SVG!"
    />
  )
}];
