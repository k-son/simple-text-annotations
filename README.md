# Simple Text Annotations
[![Generic badge](https://img.shields.io/badge/Version-1.1.2-green.svg)](https://shields.io/)

When you need to use annotations on your website.
<br><br>

## Features
- [x] show up / hide annotation on a button press
- [x] dynamically inserted texts
- [x] keyboard accessible
<br><br>

## Screenshot
![Demo example](https://github.com/k-son/Tooltips/blob/main/annotations.png?raw=true "Demo example")
<br><br>

## Demo
Go to [Demo](https://k-son.github.io/simple-text-annotations/) page.
<br><br>

## Usage
Add ```annotations.js``` and ```annotations.css``` code to your website.
Check out demo examples in ```index.html```.
#### 1. JavaScript
- place your annotation texts in the ```annotationTexts``` object
- name keys as you like
```html
<script>
  const annotationTexts = {
    text1: "First text example.",
    text2: "Second example with line break. </br>Annotation launched by Button nr 2 and Button nr 3.",
    text3: "List example. </br><ul style='list-style-type: none;'><li>First list item.</li><li>Second list item.</li><li>Third list item.</li>"
  }
</script>
```

#### 2. HTML
- add buttons markup
- make sure ```data-text``` attribute matches ```annotationTexts``` object key
- add id of your choice - will serve as ```data-opener``` attribute value in ```.annotation-wrapper```
- leave ```aria-describedby``` attribute empty - it will be populated when ```.annotation-wrapper``` opens 
```html
  <button type="button" class="annotation-btn" id="your-id" data-text="text1" aria-describedby="">some text to annotate</button>
```

- add annotation markup, you can place it at the bottom before the closing body tag (it uses fixed positioning)
```html
  <div class="annotation-wrapper" data-opener="none">
    <button type="button" class="annotation-close-btn" aria-label="close annotation"></button>
    <p class="annotation-text" id="annotation-text"></p>
  </div>
```
Text will be inserted dynamically into the ```.annotation-text```.

#### 3. CSS
- add custom properties
```html
  :root {
     --annotation-color-main: #4d88fe;
     --annotation-color-text: #fff;
  }
```
- set up accordingly fallback colors (for IE)
- adjust styles to your taste.
<br><br>

## Dependencies
No dependencies.
<br><br>

## Changelog
### [![Generic badge](https://img.shields.io/badge/Version-1.1.2-green.svg)](https://shields.io/) - 2021-02-17
#### Changed
- custom properties names to 
```html
--annotation-color-main
--annotation-color-text
```
<br><br>

## Browser Support
**Desktop:**&nbsp;&nbsp; Chrome 38+ ✓&nbsp;&nbsp; Firefox 25+ ✓&nbsp;&nbsp; Safari 8+ ✓&nbsp;&nbsp;  Opera 25+ ✓&nbsp;&nbsp; Edge 12+ ✓&nbsp;&nbsp; IE 11+ ✓&nbsp;&nbsp;

**Mobile:**&nbsp;&nbsp; Chrome Android 38+ ✓&nbsp;&nbsp; Firefox Android 25+ ✓&nbsp;&nbsp; iOS Safari 8+ ✓&nbsp;&nbsp; Opera Android 25+ ✓&nbsp;&nbsp;
<br><br>

## License
This project is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.
<br><br>

## Contact
 Jacek Jarczok
