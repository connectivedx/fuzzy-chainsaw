module.exports = (archive) => {
  const { pages, elements, isFileRenderable, getOutputName, themes } = archive;

  const getListings = (listingTree, options = { isElements: false }) =>
    listingTree
      .map((listing) => {
        const files = [];
        let groups = [];

        if (listing.groups) {
          groups = listing.groups.map((group) => ({
            title: group.title,
            hideThemeLinks: group.hideThemeLinks || false,
            files: []
          }));
        }

        if (listing.hidden) return false;

        // get a list of file name
        listing.context.keys()
          // files to just renderable modules
          .filter(isFileRenderable || (() => true))
          .forEach((key) => {
            const moduleWrapper = listing.context(key);
            const module = moduleWrapper.default || moduleWrapper;

            // hides the index.jsx file on dev mode
            if (typeof module !== 'function') return;

            if (listing.filter ? listing.filter(key, module) : true) {
              let url = `${process.env.BASE_URL}${getOutputName(key)}`;

              if (options.isElements) {
                const type = url.substr(1, url.indexOf('/', 1) - 1);
                const filename = url.substr(url.lastIndexOf('/') + 1);
                const element = filename.substr(0, filename.indexOf('.'));

                url = `${process.env.BASE_URL}styleguide.html?${type}=${element}`;
              }

              const file = {
                title: module.pageTitle || module.displayName,
                hideThemeLinks: module.hideThemeLinks || false,
                url
              };

              if (listing.groups) {
                listing.groups.forEach((group, i) => {
                  if (group.filter ? group.filter(key, module) : true) {
                    groups[i].files.push(file);
                  }
                });
              } else {
                files.push(file);
              }
            }
          });

        return {
          title: listing.title,
          hideThemeLinks: listing.hideThemeLinks || false,
          files,
          groups
        };
      })
      .filter((a) => a);

  return {
    themes,
    listings: [
      ...getListings(pages),
      ...getListings(elements, { isElements: true })
    ]
  };
};
