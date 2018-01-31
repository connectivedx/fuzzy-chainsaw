const eventListener = (el) => el.addEventListener('click', (e) => {
  const target = e.target;

  /* Catalog Element Consume */
  if (target.dataset.isCatalog === 'true') {
    const oldName = ['./', target.dataset.catalogPath].join('');
    const newName = ['./', oldName.replace('@', '')].join('');
    const jsxFile = newName.split('/');
    const url = '/catalog/consume';
    const xhr = new XMLHttpRequest();

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      OLD: oldName.replace('.html', ''),
      NEW: newName.replace('.html', ''),
      JSX: jsxFile[jsxFile.length - 1]
    }));
  }
});

export default (el) => eventListener(el);
