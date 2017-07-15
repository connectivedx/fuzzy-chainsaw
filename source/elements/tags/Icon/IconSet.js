const __svg__ = { // eslint-disable-line
  path: './assets/**/*.svg',
  name: 'assets/svgs/iconset-[hash].svg'
};

((options) => {
  let ajax = new XMLHttpRequest();

  if (typeof XDomainRequest !== 'undefined') {
    ajax = new XDomainRequest();
  }

  ajax.open('GET', options.filename, true);
  ajax.onprogress = () => {};
  ajax.onload = () => {
    if (!ajax.responseText || ajax.responseText.substr(0, 4) !== '<svg') {
      throw Error('Invalid SVG Response');
    }
    if (ajax.status < 200 || ajax.status >= 300) {
      return;
    }

    const div = document.createElement('div');
    div.innerHTML = ajax.responseText;

    document.body.insertBefore(div, document.body.childNodes[0]);
  };

  ajax.send();
})(__svg__);
