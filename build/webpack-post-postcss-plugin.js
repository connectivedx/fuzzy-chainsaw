const postcss = require('postcss');
const match = require('minimatch');

function PostPostCSSPlugin(plugins) {
  this.postPostCssPlugins = plugins;
}

PostPostCSSPlugin.prototype.apply = function(compiler) {
  compiler.plugin("compilation", (compilation) => {
    compilation.plugin('optimize-chunk-assets', (_, done) => {
      Promise.all(
        Object.keys(compilation.assets)
          .map(key => {
            if (match(key, '**/*.css')) {
              const src =
                compilation.assets[key]
                  .source()
                  .replace(/:\\--/gi, ':--'); // fix escaping via css-loader

              return postcss(this.postPostCssPlugins)
                .process(src)
                .then(res => {
                  compilation.assets[key] = {
                    source: () => res.css,
                    size: () => res.css.length
                  };

                  return Promise.resolve();
                })
            } else {
              return Promise.resolve(compilation.assets[key]);
            }

          })
      ).then(() => {
        done();
      })

    });
  });
}

module.exports = PostPostCSSPlugin;
