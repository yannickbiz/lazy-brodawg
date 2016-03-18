var LazyLoader = (function() {
  'use strict';

  var lazyLoaders;
  var options = {};
  var defaults = {
    att: 'lazy-loader',
    loadedClass: 'original-loaded',
    onScroll: false
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
    lazyLoaders = document.querySelectorAll(`[${options.att}]`);
  };

  var _getInlineAttributes = loaders => {
    for (let i = 0; i < loaders.length; i++) {
      loaders[i].lazyLoader = JSON.parse(loaders[i].getAttribute(`${options.att}`));
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

  var _setPlaceholders = loaders => {
    var ratio;
    var placeholder;

    for (let i = 0; i < loaders.length; i++) {
      ratio = (loaders[i].lazyLoader.sizes[_getImgSize()].ratio * 100);
      placeholder = loaders[i].querySelector('div');
      placeholder.style.paddingBottom = ratio + '%';
    }
  };

  var _makeImgs = loaders => {
    var _makeImg = index => {
      var noscript = loaders[index].querySelector('noscript');

      var img = new Image();
      img.src = loaders[index].lazyLoader.sizes[_getImgSize()].src;
      img.alt = loaders[index].lazyLoader.alt;
      img.onload = () => {
        loaders[index].appendChild(img);
        setTimeout(() => {
          loaders[index].classList.add(options.loadedClass);
          loaders[index].removeChild(noscript);
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
  };

  return {
    init: init
  };
})();
