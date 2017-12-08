import {
  Grid,
  Grid__item
} from './Grid';

export default [{
  name: 'Grid layout',
  component: (
    <Grid className="Sg--pattern">
      <Grid__item span="one">1</Grid__item>
      <Grid__item span="eleven">11</Grid__item>
      <Grid__item span="two">2</Grid__item>
      <Grid__item span="ten">10</Grid__item>
      <Grid__item span="three">3</Grid__item>
      <Grid__item span="nine">9</Grid__item>
      <Grid__item span="four">4</Grid__item>
      <Grid__item span="eight">8</Grid__item>
      <Grid__item span="five">5</Grid__item>
      <Grid__item span="seven">7</Grid__item>
      <Grid__item span="six">6</Grid__item>
      <Grid__item span="six">6</Grid__item>
      <Grid__item span="seven">7</Grid__item>
      <Grid__item span="five">5</Grid__item>
      <Grid__item span="eight">8</Grid__item>
      <Grid__item span="four">4</Grid__item>
      <Grid__item span="nine">9</Grid__item>
      <Grid__item span="three">3</Grid__item>
      <Grid__item span="ten">10</Grid__item>
      <Grid__item span="two">2</Grid__item>
      <Grid__item span="eleven">11</Grid__item>
      <Grid__item span="one">1</Grid__item>
      <Grid__item span="twelve">12</Grid__item>
    </Grid>
  )
}, {
  name: 'Auto-fit (min-width: 10rem)',
  component: (
    <Grid variant="auto-fit" className="Sg--pattern">
      <Grid__item>1</Grid__item>
      <Grid__item>2</Grid__item>
      <Grid__item>3</Grid__item>
      <Grid__item>4</Grid__item>
    </Grid>
  )
}, {
  name: 'Auto-fill (min-width: 10rem)',
  component: (
    <Grid variant="auto-fill" className="Sg--pattern">
      <Grid__item>1</Grid__item>
      <Grid__item>2</Grid__item>
      <Grid__item>3</Grid__item>
      <Grid__item>4</Grid__item>
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
