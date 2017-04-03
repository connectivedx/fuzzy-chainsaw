module.exports = (config) => {
  // overwrite normal build image loaders
  const imageLoaderIndex =
    config.module.loaders.map((rule, i) => (
      String(rule.test).indexOf('jpe') !== -1
        && rule.loaders
        && rule.loaders[0].indexOf('file?') !== -1
      ? i : false
    )).filter((a) => a !== false)[0];

  config.module.loaders[imageLoaderIndex] = {
    test: /\.(jpe?g|png)$/i,
    loaders: [
      'responsive?name=/assets/images/css/[name]-[md5:hash:hex:8].',
      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
    ]
  };

  return config;
};
