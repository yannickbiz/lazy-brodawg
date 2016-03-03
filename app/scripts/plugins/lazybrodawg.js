var LazyBrodawg = (function() {
  'use strict';

  var lazyLoaders;
  var options = {};
  var defaults = {
    onScroll: true,
    imgsPath: ''
  };

  var _setOptions = config => {
    if (typeof config === 'object') {
      for (var key in defaults) {
        if (!defaults.hasOwnProperty(key)) {
          continue;
        }
        options[key] = (typeof config[key] === 'undefined' ? defaults[key] : config[key]);
      }
    }
  };

  var _getElements = () => {
    lazyLoaders = document.querySelectorAll('[lazy-brodawg]');
  };

  var _getInlineAttributes = loaders => {
    for (let i = 0; i < loaders.length; i++) {
      loaders[i].lazyBrodawg = JSON.parse(loaders[i].getAttribute('lazy-brodawg'));
    }
  };

  var _setPlaceholders = loaders => {
    var ratio;

    for (let i = 0; i < loaders.length; i++) {
      ratio = loaders[i].lazyBrodawg.sizes[_getImgSize()].ratio * 100;
      loaders[i].style.paddingBottom = ratio + '%';
    }
  };

  var _getImgSize = () => {
    var deviceWidth = window.innerWidth;

    if (deviceWidth >= 1200) {
      return 'lg';
    } else if (deviceWidth >= 640) {
      return 'md';
    }
    return 'sm';
  };

  var _makeImgs = loaders => {
    var _makeImg = index => {
      var ph = loaders[index].querySelector('noscript');

      var img = new Image();
      img.src = options.imgsPath + loaders[index].lazyBrodawg.sizes[_getImgSize()];
      img.onload = () => {
        loaders[index].appendChild(img);
        setTimeout(() => {
          loaders[index].classList.add('original-loaded');
          loaders[index].removeChild(ph);
          console.log(img.src);
        }, 0);
      };
    };

    for (let i = 0; i < loaders.length; i++) {
      _makeImg(i);
    }
  };

  var init = config => {
    _setOptions(config);
    _getElements();
    _getInlineAttributes(lazyLoaders);
    _setPlaceholders(lazyLoaders);
    _makeImgs(lazyLoaders);
    console.log('init');
  };

  return {
    init: init
  };
})();
