class Tracking {
  constructor(options) {
    this.settings = {
      tracker: document.body,
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

  vendorsInit = (vendors) => {
    let v = vendors.length;
    while (v--) {
      if (vendors[v].type.match('Google')) {
        // Google Tag Manager
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
        })(window, document, 'script', 'dataLayer', vendors[v].id);
      }
    }
  }

  execute = (target, requestedEventType, needsDebounce) => {
    const events = JSON.parse(target.dataset.tracking.replace(/'/g, '"'));
    if (needsDebounce > -1) {
      clearTimeout(this.debounceWait);
      this.debounceWait = setTimeout(() => {
        this.eventScrub(events, requestedEventType);
      }, 250);
    } else {
      this.eventScrub(events, requestedEventType);
    }
  }

  eventScrub = (events, matchingEvents) => {
    let i = events.length;
    while (i--) {
      const eventType = events[i].event;
      const eventLabel = events[i].label;
      let eventData = events[i].data;

      if (document.querySelector(eventData)) {
        eventData = document.querySelector(eventData).innerHTML;
      }

      if (eventType === matchingEvents) {
        // Google Tag Manager
        if (global.dataLayer) {
          global.dataLayer.push({
            [['"', eventLabel.replace(/ /g, ''), '"'].join('')]: eventData
          });
        }
      }
    }
  }

  init = (options) => {
    this.vendorsInit(options.vendors);
    let i = this.settings.eventTypes.length;
    while (i--) {
      this.settings.tracker.addEventListener(this.settings.eventTypes[i], (e) => {
        if (e.target.hasAttribute('data-tracking')) {
          this.execute(e.target, e.type, this.debounceList.indexOf(e.type));
        }
      }, true, true);
    }
  }
}

export default Tracking;
