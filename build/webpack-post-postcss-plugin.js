const postcss = require('postcss');
const match = require('minimatch');


const makeAbsolutePathRelative = output => {
  return output
    .replace(/url\(\/assets/gi, `url(.`)
    .replace(/url\(\"\/assets/gi, `url(".`)
}


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
                  // fix escaping bug(?) via css-loader
                  // replaces &:\--custom-selector with &:--custom-selector
                  // replace \--mixin: {} with --mixin: {}
                  .replace(/\\--/gi, '--');

              return postcss(this.postPostCssPlugins)
                .process(src)
                .then(res => {
                  res.css = makeAbsolutePathRelative(res.css);

                  compilation.assets[key] = {
                    source: () => res.css,
                    size: () => res.css.length
                  };

                  return Promise.resolve();
                })
                .catch(err => {
                  compilation.errors.push(err.stack);
                });
            } else {
              return Promise.resolve(compilation.assets[key]);
            }
          })
      )
      .catch(err => {
        compilation.errors.push(err.stack);
      })
      .then(() => {
        done();
      })

    });
  });
}

module.exports = PostPostCSSPlugin;
