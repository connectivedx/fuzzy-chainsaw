const fileRegex = /^(?!.*\.test\.jsx$).*\.(jsx|md)$/;

// this regex selects *.jsx and *.md files, but skips *.test.jsx
const compositionsContext = require.context('@compositions/', true, fileRegex);
const componentsContext = require.context('@components/', true, fileRegex);
const tagsContext = require.context('@tags/', true, fileRegex);


// http://localhost:8080/styleguide/?element=tags/Heading&example=QiRiY3n

export default {
  examples: [{
    title: 'Compositions',
    context: compositionsContext
  }, {
    title: 'Components',
    context: componentsContext
  }, {
    title: 'Tags',
    context: tagsContext
  }]
};

