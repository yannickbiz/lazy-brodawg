# Lazy loader

Lazy loader is a lightweight plugin that delays the loading of images. The main goal is to provide better performance and perception for the user and also deliver the good asset depending on the web context.

Using lazy loading makes the page load faster for a better user experience.

### Installation
...

### Usage
Include the path and ratio of your image. For users without javascript enabled, wrap the original image inside a `<noscript>` tag. The div is required to apply the ratio placeholder.

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

Run the script on DOM Content loaded:
```javascript
  document.addEventListener('DOMContentLoaded', () => {
    LazyLoader.init({});
  });
```

You can also configured the placeholder via `scss`. You only need to change the variable `$bg-color` on your build or extend a base64 placeholder `%placeholder`.

### Breakpoints
Lazy loader is using three default breakpoints `sm:<640`, `md:>=640` and `lg:>=1200`.

### Ratio
The ratio is calculated with a simple formula of `height/width`.

### Browser support
Compatible with All Browsers and IE9+.

### Snippets

Atom
```
'.text.html.basic':
  'Lazy loader':
    'prefix': 'll'
    'body': """
      <div lazy-loader='{
          "alt": "Lazy Loader",
          "sizes": {
            "sm": {
              "src": "../images/",
              "ratio": "(width/height)"
            },
            "md": {
              "src": "../images/",
              "ratio": "(width/height)"
            },
            "lg": {
              "src": "../images/galaxy.jpg",
              "ratio": "0.545"
            }
          }
        }'>
        <div></div>
        <noscript><img src="../images/$1"></noscript>
      </div>
    """
```

Sublime
```json
# Coming soon!
```

### Coming soon
- Custom breakpoints
- On scroll option

### Contributors
[Globalia](http://www.globalia.ca/fr/) Front end team.

### License
Lazy loader is licensed under the [MIT license](https://opensource.org/licenses/MIT)
