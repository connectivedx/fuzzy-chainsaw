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
              const src = compilation.assets[key].source();

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
                .catch(e => {
                  done(e);
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
