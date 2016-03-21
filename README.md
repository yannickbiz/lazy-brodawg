# Lazy loader

Lazy loader is a light weight plugin that delays the loading of images. It's also providing the good source and ratio depending on the context.

Using lazy loading makes the page load faster for a better user experience.

### Installation
...

### Markup
```html
  <div lazy-loader='{
    "alt": "Lazy Loader",
    "sizes": {
      "sm": {
        "src": "../images/galaxy_sm.jpg",
        "ratio": "0.5625"
      },
      "md": {
        "src": "../images/galaxy_md.jpg",
        "ratio": "0.5625"
      },
      "lg": {
        "src": "../images/galaxy.jpg",
        "ratio": "0.5625"
      }
    }
  }'>
    <div></div>
    <noscript><img src="../images/galaxy.jpg"></noscript>
  </div>
```

### Init
```javascript
  document.addEventListener('DOMContentLoaded', () => {
    LazyLoader.init({});
  });
```

### Breakpoints
Lazy loader is using three default breakpoints `sm:<640`, `md:>=640` and `lg:>=1200`.

### Ratio
The ratio is calculated with a simple formula of `height/width`.

### In the next version...
- Custom breakpoints
- On scroll option

### License
MIT
