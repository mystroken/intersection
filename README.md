# Intersection

> :eyes: Get notified when a DOM element appear in and out of view.

<br>

Consider using the browser API, [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), if you don't care about IE and if you just need a basic support of in / out of viewport notifications.

<br>

## Installation

- Via NPM — ```npm install @mystroken/intersection```

- Manually — [https://unpkg.com/@mystroken/intersection/dist/intersection.min.js](https://unpkg.com/@mystroken/intersection/dist/intersection.min.js)

<br>

## Usage

Look at the source files for more information.

###### Get started

```javascript
const options = {};
const o = new Intersection(options);
o.observe(document.querySelectorAll('.in-view'));
```
