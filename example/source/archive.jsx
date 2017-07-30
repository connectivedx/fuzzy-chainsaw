// import {
//   filterByAttributes,
//   filterByPath
// } from 'fuzzy-chainsaw-styleguide/helpers/context';

const filterByAttributes = (a) => a;
const filterByPath = (a) => a;

// this regex selects *.jsx and *.md files, but skips *.test.jsx
const pagesContext = require.context('@pages/', true, /^(?!.*\.test\.jsx$).*\.(jsx|md)$/);
const elementsContext = require.context('@elements/', true, /^(?!.*\.test\.jsx$).*\.(jsx|md)$/);

// http://localhost:8080/styleguide/?element=tags/Heading&example=QiRiY3n
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
    title: 'Indexes',
    context: pagesContext,
    filter: filterByAttributes({ pageType: 'index' })
  }, {
    title: 'Pages',
    context: pagesContext,
    filter: filterByAttributes({ theme: undefined, pageType: (type) => type !== 'index' })
  }, {
    title: 'Generic Pages',
    context: pagesContext,
    filter: filterByAttributes({ theme: 'generic', pageType: (type) => type !== 'index' })
  }],
  elements: [{
    title: 'Compositions',
    context: elementsContext,
    filter: filterByPath('compositions/**/*'),
    groups: elementGroups
  }, {
    title: 'Components',
    context: elementsContext,
    filter: filterByPath('components/**/*'),
    groups: elementGroups
  }, {
    title: 'Tags',
    context: elementsContext,
    filter: filterByPath('tags/**/*'),
    groups: elementGroups
  }, {
    title: 'Modifiers',
    context: elementsContext,
    filter: filterByPath('modifiers/**/*'),
    groups: elementGroups
  }]
};
