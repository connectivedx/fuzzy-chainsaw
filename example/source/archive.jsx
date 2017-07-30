import { filterByAttributes } from 'fuzzy-chainsaw-styleguide/helpers/context';

const fileRegex = /^(?!.*\.test\.jsx$).*\.(jsx|md)$/;

// this regex selects *.jsx and *.md files, but skips *.test.jsx
const pagesContext = require.context('@pages/', true, fileRegex);
const compositionsContext = require.context('@compositions/', true, fileRegex);
const componentsContext = require.context('@components/', true, fileRegex);
const tagsContext = require.context('@tags/', true, fileRegex);

// http://localhost:8080/styleguide/?element=tags/Heading&example=QiRiY3n
const pageGroups = [{
  title: 'Indexes',
  filter: filterByAttributes({ pageType: 'index' })
}, {
  title: 'Pages',
  filter: filterByAttributes({ theme: undefined, pageType: (type) => type !== 'index' })
}, {
  title: 'Generic Pages',
  filter: filterByAttributes({ theme: 'generic', pageType: (type) => type !== 'index' })
}];

const elementGroups = [{
  filter: filterByAttributes({ pageType: undefined })
}, {
  title: 'Actions',
  filter: filterByAttributes({ pageType: 'action' })
}, {
  title: 'Forms',
  filter: filterByAttributes({ pageType: 'form' })
}, {
  title: 'Layout',
  filter: filterByAttributes({ pageType: 'layout' })
}, {
  title: 'Typography and Content',
  filter: filterByAttributes({ pageType: 'content' })
}, {
  title: 'Behavior',
  filter: filterByAttributes({ pageType: 'behavior' })
}];


export default {
  pages: [{
    title: 'Pages',
    context: pagesContext,
    groups: pageGroups
  }],
  elements: [{
    title: 'Compositions',
    context: compositionsContext,
    groups: elementGroups
  }, {
    title: 'Components',
    context: componentsContext,
    groups: elementGroups
  }, {
    title: 'Tags',
    context: tagsContext,
    groups: elementGroups
  }]
};
