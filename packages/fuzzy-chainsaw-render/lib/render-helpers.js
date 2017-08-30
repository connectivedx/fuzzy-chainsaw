/*
  This provides helpers for staticly rendering
  react components into html markup
*/

const renderComponent = ({ module, template, render }) =>
  template.toString()
    .replace('{{pageTitle}}', module.pageTitle)
    .replace('{{htmlClass}}', module.htmlClass ? module.htmlClass : '')
    .replace('{{bodyClass}}', module.bodyClass ? module.bodyClass : '')
    .replace('{{theme}}', module.theme ? `Theme--${module.theme}` : '')
    .replace('{{output}}', render(module));


const selectListing = (pageListing, options = { }) =>
  pageListing.reduce((renderTree, listing) => {
    listing.context.keys()
      .filter(options.isFileRenderable || (() => true))
      .forEach((key) => {
        const moduleWrapper = listing.context(key);
        const module = moduleWrapper.default || moduleWrapper;
        const matches = listing.filter ? listing.filter(key, module) : true;

        if (matches) {
          const outputPath = options.getOutputName(key);
          renderTree[outputPath] = module;
        }
      });

    return renderTree;
  }, {});


module.exports = {
  renderComponent,
  selectListing
};
