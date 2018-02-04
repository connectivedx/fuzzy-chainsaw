import {
  Grid,
  Grid__Column
} from './Grid';

export default [{
  name: 'Grid (default)',
  component: (
    <Grid>
      <Grid__Column size="1">1</Grid__Column>
      <Grid__Column size="11">11</Grid__Column>
      <Grid__Column size="2">2</Grid__Column>
      <Grid__Column size="10">10</Grid__Column>
      <Grid__Column size="3">3</Grid__Column>
      <Grid__Column size="9">9</Grid__Column>
      <Grid__Column size="4">4</Grid__Column>
      <Grid__Column size="8">8</Grid__Column>
      <Grid__Column size="5">5</Grid__Column>
      <Grid__Column size="7">7</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="7">7</Grid__Column>
      <Grid__Column size="5">5</Grid__Column>
      <Grid__Column size="8">8</Grid__Column>
      <Grid__Column size="4">4</Grid__Column>
      <Grid__Column size="9">9</Grid__Column>
      <Grid__Column size="3">3</Grid__Column>
      <Grid__Column size="10">10</Grid__Column>
      <Grid__Column size="2">2</Grid__Column>
      <Grid__Column size="11">11</Grid__Column>
      <Grid__Column size="1">1</Grid__Column>
      <Grid__Column size="12">12</Grid__Column>
    </Grid>
  )
}, {
  name: 'Column Order',
  component: (
    <Grid>
      <Grid__Column size="4" order="3">First</Grid__Column>
      <Grid__Column size="4" order="2">Second</Grid__Column>
      <Grid__Column size="4" order="1">Third</Grid__Column>
    </Grid>
  )
}, {
  name: 'Auto-fit (min-width: 5rem)',
  component: (
    <Grid variant="fit">
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="1">1</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="1">1</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="1">1</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="1">1</Grid__Column>
    </Grid>
  )
}, {
  name: 'Auto-fill (min-width: 5rem)',
  component: (
    <Grid variant="fill">
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="1">1</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="1">1</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="1">1</Grid__Column>
      <Grid__Column size="6">6</Grid__Column>
      <Grid__Column size="1">1</Grid__Column>
    </Grid>
  )
}];
