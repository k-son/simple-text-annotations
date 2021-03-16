# Simple Text Annotations
[![Generic badge](https://img.shields.io/badge/Version-2.0.0-green.svg)](https://shields.io/)

Use this small library when you need to annotate something on your website.
<br><br>

## Features
- [x] show up / hide annotation on a element click
- [x] dynamically inserted texts
- [x] keyboard accessible
<br><br>

## Screenshot
![Demo example](https://github.com/k-son/Tooltips/blob/main/annotations.png?raw=true "Demo example")
<br><br>

## Demo
Go to [Demo](https://k-son.github.io/simple-text-annotations/) page.
<br><br>

## Installation
- Add ```annotations.js``` or ```annotations.ts``` code to your website.
- Add styles from ```annotations.css```.
- Place markup at the bottom of your html file, before closing body tag (it uses fixed positioning).
```html
  <div class="annotation-wrapper">
    <button type="button" class="annotation-close-btn" aria-label="close annotation"></button>
    <p class="annotation-text" id="annotation-text"></p>
  </div>
```
<br><br>

## Usage
#### 1. JavaScript
- Place your annotation texts in the ```annotationTexts``` object.
- Name keys as you like.
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
Add to clickable elements you want to annotate:
- ```.annotation-btn``` class. 
- ```data-text="key-name"``` attribute. Make sure its value matches corresponding key in ```annotationTexts``` object.
- ```aria-describedby=""``` attribute with no value.


## Example
Check out demo examples in ```index.html```.
<br><br>

## Changelog
### [![Generic badge](https://img.shields.io/badge/Version-2.0.0-green.svg)](https://shields.io/) - 2021-03-16
#### Changed
- New JavaScript and TypeScript logic
- Id and data-opener attribute removed from the markup

### [![Generic badge](https://img.shields.io/badge/Version-1.2.0-green.svg)](https://shields.io/) - 2021-03-09
#### Added
- TypeScript version

### [![Generic badge](https://img.shields.io/badge/Version-1.1.3-green.svg)](https://shields.io/) - 2021-03-01
#### Added
- IIFE
- "use strict"

### [![Generic badge](https://img.shields.io/badge/Version-1.1.2-green.svg)](https://shields.io/) - 2021-02-17
#### Changed
Custom properties names to 
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
