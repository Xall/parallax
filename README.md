# Parallax
This is a small javascript, which creates a parallex effect as seen on http://www.unless-women.eu. It requires mootools to be run.

# Usage
This repository includes a working example.

Add the following code to your html file:
```html
<div class="parallax" width="###" height="###" ref="window">
    <img src="image" height="###" width="###" />
    <img src="another image" height="###" width="###" />
</div>
```
Adjust widths and heights above AND in your css. The parameter `ref` is optional. If it is set to `window`, the parallax element is no longer position dependent. Instead the effect is controlled by the absolute position of the curser in the browser window, instead of its relative position.
The wider/higher your image is, the faster it will move.

# Known issues
* If the position of the parallax div changes, the effect won't work properly. This may be   fixed by replacing
  ```js
  var mouseX = event.page.x - parallaxPos.x;
  var mouseY = event.page.y - parallaxPos.y;
  ```
  with
  ```js
  var mouseX = event.page.x - parallax.getPosition()[0].x;
  var mouseY = event.page.y - parallax.getPosition()[0].y;
  ```
  inside the `mousemove` event. This may drastically reduce performance

* the `getPosition` method does not always work as expected. I had some issues with `<img>` tags without a set `width` and `height`

# Copyright
The Photoshop Brush used to create the parallax bar was created by http://www.obsidiandawn.com/