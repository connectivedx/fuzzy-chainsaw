class Tracking {
  constructor(options) {
    this.settings = {
      eventTypes: [
        'load',
        'beforeunload',
        'unload',
        'reset',
        'submit',
        'resize',
        'scroll',
        'cut',
        'copy',
        'paste',
        'drag',
        'dragend',
        'dragover',
        'dragleave',
        'drop',
        'mouseenter',
        'mouseover',
        'mousemove',
        'mousedown',
        'mouseup',
        'mouseout',
        'mouseleave',
        'auxclick',
        'click',
        'dblclick',
        'contextmenu',
        'select',
        'pointerlockchange',
        'pointerlockerror',
        'select',
        'keyup',
        'keypress',
        'keydown',
        'focus',
        'blur',
        'play',
        'pause',
        'seeking',
        'seeked',
        'volumechange',
        'ratechange',
        'stalled',
        'ended',
        'waiting',
        'complete',
        'change'
      ]
    };

    this.debounceList = [
      'keydown',
      'waiting',
      'mousemove',
      'keypress',
      'scroll'
    ];

    this.init(options);
    this.debounceWait = undefined;
  }

  setupGoogleTagManager = (id) => {
    if (!id) {
      console.log('Google Tag Manager requires an account id to complete tracking setup.'); // eslint-disable-line
      return;
    }

    // Google Tag Manager Setup Code
    ((w, d, s, l, i) => {
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l !== 'dataLayer' ? ['&l=', l].join('') : '';

      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      j.async = true;
      j.src = ['https://www.googletagmanager.com/gtm.js?id=', i, dl].join('');
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', id);
  }

  setupVendors = (vendors) => {
    let v = vendors.length;
    while (v--) {
      if (vendors[v].type.match('Google')) {
        this.setupGoogleTagManager(vendors[v].id);
      }
    }
  }

  execute = (elm, eventType, debounceBool) => {
    try {
      JSON.parse(elm.dataset.tracking.replace(/'/g, '"'));
    } catch (err) {
      console.log(elm, 'It appears this element has a malformatted data-tracking value. Please review and correct any syntax issues as needed.'); // eslint-disable-line
      return;
    }

    const elmDataset = JSON.parse(elm.dataset.tracking.replace(/'/g, '"'));

    if (debounceBool > -1) {
      clearTimeout(this.debounceWait);

      this.debounceWait = setTimeout(() => {
        this.eventScrub(elmDataset, eventType);
      }, 250);
    } else {
      this.eventScrub(elmDataset, eventType);
    }
  }

  eventScrub = (dataset, type) => {
    let i = dataset.length;
    while (i--) {
      const { event } = dataset[i];
      let { label } = dataset[i];
      let { data } = dataset[i];
      label = label.replace(/ /g, '');

      if (event === type) {
        if (global.dataLayer) { // Google Tag Manager
          if (typeof data === 'object') {
            // when data is a JSON object
            const collection = {};
            collection.event = label;

            const dataPoints = Object.keys(data).reverse();
            let j = dataPoints.length;

            while (j--) {
              collection[dataPoints[j]] = data[dataPoints[j]];
            }

            global.dataLayer.push(collection);
          } else if (data === '') {
            // when no data is supplied we only push out event
            global.dataLayer.push({
              event: label
            });
          } else {
            try {
              // if data is an element selector
              const attribute = data.split(':attr');
              const selector = document.querySelector(attribute[0]);

              if (attribute[1]) {
                data = selector.getAttribute(attribute[1].replace('(', '').replace(')', ''));
              } else {
                data = selector.innerHTML;
              }

              global.dataLayer.push({
                event: label,
                data
              });
            } catch (err) {
              global.dataLayer.push({
                event: label,
                data
              });
            }
          }
        }
      }
    }
  }

  init = (options) => {
    this.setupVendors(options.vendors);

    let i = this.settings.eventTypes.length;
    while (i--) {
      document.body.addEventListener(this.settings.eventTypes[i], (e) => {
        if (e.target.hasAttribute('data-tracking')) {
          this.execute(e.target, e.type, this.debounceList.indexOf(e.type));
        }
      }, true, true);
    }
  }
}

export default Tracking;
