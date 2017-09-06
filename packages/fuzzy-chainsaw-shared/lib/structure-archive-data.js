module.exports = (archive) => {
  const { pages, elements } = archive;
  const getListings = (listingTree) =>
    listingTree.map((listing) => {
      const files = [];

      listing.context.keys()
          // TODO: filter filetypes
        .forEach((key) => {
          const moduleWrapper = listing.context(key);
          const module = moduleWrapper.default || moduleWrapper;

          if (listing.filter ? listing.filter(key, module) : true) {
            files.push({
              title: module.pageTitle,
              url: key
            });
          }
        });

      return {
        title: listing.title,
        hasThemeLinks: false,
        files
      };
    });

  return {
    themes: [{
      id: 'generic',
      title: 'Generic'
    }],
    listings: [
      ...getListings(pages),
      ...getListings(elements)
    ]
  };
};
