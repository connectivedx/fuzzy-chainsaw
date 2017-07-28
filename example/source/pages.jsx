import { filterByAttributes } from 'fuzzy-chainsaw-styleguide/helpers/context';

// this regex selects *.jsx and *.md files, but skips *.test.jsx
const pagesContext = require.context('@pages/', true, /^(?!.*\.test\.jsx$).*\.(jsx|md)$/);


// http://localhost:8080/styleguide/?element=tags/Heading&example=QiRiY3n

export default [{
  title: 'Indexes',
  context: pagesContext,
  filter: filterByAttributes({ pageType: 'index' })
}, {
  title: 'Pages',
  context: pagesContext,
  filter: filterByAttributes({ theme: undefined })
}, {
  title: 'Generic Pages',
  context: pagesContext,
  filter: filterByAttributes({ theme: 'generic' })
}];
