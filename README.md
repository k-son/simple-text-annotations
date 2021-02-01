## Simple Text Annotations
[![Generic badge](https://img.shields.io/badge/Version-1.1.1-green.svg)](https://shields.io/)

When you need to use annotations on your website.


## Screenshot
![Example screenshot](https://github.com/k-son/Tooltips/blob/main/annotations.png)


## Features
- [x] show up / hide annotation on a button press
- [x] dynamically inserted texts
- [x] keyboard accessible



## Usage
#### 1. JavaScript
- copyt js code
- place your annotation texts in the *annotationTexts* object
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
Add buttons markup.
```html
  <button type="button" class="annotation-btn" id="your-id" data-text="text1" aria-describedby="">some text to annotate</button>
```
- make sure data-text attribute matches *annotationTexts* object keys
- add id of your choice - will serve as *data-opener* attribute value in *annotation-wrapper*
- leave *aria-describedby* attribute empty - it will be populated when *annotation-wrapper* opens 

```html
  <div class="annotation-wrapper" data-opener="none">
    <button type="button" class="annotation-close-btn" aria-label="close annotation"></button>
    <p class="annotation-text" id="annotation-text"></p>
  </div>
Text will be inserted dynamically into the *annotation-text* after button press.
```


#### 3. CSS
Copy and adjust styles to your taste.


## Support

## License
This project is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.

## Contact
 Jacek Jarczok.
