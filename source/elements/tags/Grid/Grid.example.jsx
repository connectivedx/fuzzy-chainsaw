import {
  Grid,
  Grid__item
} from './Grid';

export default [{
  name: 'Grid layout',
  component: (
    <Grid className="Sg--pattern">
      <Grid__item className="Grid__item--span-one">1</Grid__item>
      <Grid__item className="Grid__item--span-eleven">11</Grid__item>
      <Grid__item className="Grid__item--span-two">2</Grid__item>
      <Grid__item className="Grid__item--span-ten">10</Grid__item>
      <Grid__item className="Grid__item--span-three">3</Grid__item>
      <Grid__item className="Grid__item--span-nine">9</Grid__item>
      <Grid__item className="Grid__item--span-four">4</Grid__item>
      <Grid__item className="Grid__item--span-eight">8</Grid__item>
      <Grid__item className="Grid__item--span-five">5</Grid__item>
      <Grid__item className="Grid__item--span-seven">7</Grid__item>
      <Grid__item className="Grid__item--span-six">6</Grid__item>
      <Grid__item className="Grid__item--span-six">6</Grid__item>
      <Grid__item className="Grid__item--span-seven">7</Grid__item>
      <Grid__item className="Grid__item--span-five">5</Grid__item>
      <Grid__item className="Grid__item--span-eight">8</Grid__item>
      <Grid__item className="Grid__item--span-four">4</Grid__item>
      <Grid__item className="Grid__item--span-nine">9</Grid__item>
      <Grid__item className="Grid__item--span-three">3</Grid__item>
      <Grid__item className="Grid__item--span-ten">10</Grid__item>
      <Grid__item className="Grid__item--span-two">2</Grid__item>
      <Grid__item className="Grid__item--span-eleven">11</Grid__item>
      <Grid__item className="Grid__item--span-one">1</Grid__item>
      <Grid__item className="Grid__item--span-twelve">12</Grid__item>
    </Grid>
  )
}, {
  name: 'Primary and secondary content',
  component: (
    <Grid className="Sg--pattern">
      <Grid__item tagName="main" role="main" className="Grid__item--primary">Primary content</Grid__item>
      <Grid__item tagName="aside" role="complementary" className="Grid__item--secondary">Secondary content</Grid__item>
    </Grid>
  )
}, {
  name: '2-up',
  component: (
    <Grid variant="2-up" className="Sg--pattern">
      <Grid__item>1/2</Grid__item>
      <Grid__item>1/2</Grid__item>
      <Grid__item>1/2</Grid__item>
      <Grid__item>1/2</Grid__item>
    </Grid>
  )
}, {
  name: '3-up',
  component: (
    <Grid variant="3-up" className="Sg--pattern">
      <Grid__item>1/3</Grid__item>
      <Grid__item>1/3</Grid__item>
      <Grid__item>1/3</Grid__item>
      <Grid__item>1/3</Grid__item>
      <Grid__item>1/3</Grid__item>
      <Grid__item>1/3</Grid__item>
    </Grid>
  )
}, {
  name: '4-up',
  component: (
    <Grid variant="4-up" className="Sg--pattern">
      <Grid__item>1/4</Grid__item>
      <Grid__item>1/4</Grid__item>
      <Grid__item>1/4</Grid__item>
      <Grid__item>1/4</Grid__item>
      <Grid__item>1/4</Grid__item>
      <Grid__item>1/4</Grid__item>
      <Grid__item>1/4</Grid__item>
      <Grid__item>1/4</Grid__item>
    </Grid>
  )
}];
