## Simple Text Annotations
[![Generic badge](https://img.shields.io/badge/Version-1.1.1-green.svg)](https://shields.io/)

When you need to use annotations for the webstie text.


## Screenshot
![Example screenshot](https://github.com/k-son/Tooltips/blob/main/annotations.png)


## Features
- [x] annotations show up and hide on a button press
- [x] texts are inserted dynamically


## Usage

Adjust css styles to your taste.

#### 1. JavaScript
- copyt js code

- place your annotation texts in a 'annotationTexts' object
```html
<script>
  const annotationTexts = {
    text1: "First text example.",
    text2: "Second example with line break. </br>Annotation launched by Button nr 2 and Button nr 3.",
    text3: "<ul style='list-style-type: none;'><li>First list item.</li><li>Second list item.</li><li>Third list item.</li>"
  }
</script>
```

#### 2. HTML
- add buttons markup
```html
  <button type="button" class="annotation-btn" id="your-id" data-text="text1" aria-describedby="">some text to annotate</button>
```
- make sure data-text attribute matches annotationText object's property name
- add id of your choice - will serve as data-opener attribute value in annotation wrapper
- leave aria-describedby attribute empty - it will be populated when annotation-wrapper opens 

- add annotation markup
```html
  <div class="annotation-wrapper" data-opener="none">
    <button type="button" class="annotation-close-btn" aria-label="close annotation"></button>
    <p class="annotation-text" id="annotation-text"></p>
  </div>
```


#### 3. CSS
Adjust styles to your taste.


## Support

## License
This project is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.

## Contact
 Jacek Jarczok.
