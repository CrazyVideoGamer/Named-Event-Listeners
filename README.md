# NamedEventListeners
Makes named event listeners so removing event listeners are easier.
<span style="color: yellow">Warning: code not tested</span>
## Installation:
Download from github, or add this javascript file: https://raw.githubusercontent.com/CrazyVideoGamez/Named-Event-Listeners/master/namedEventListeners.js
To insert into html
```html
<script src="https://raw.githubusercontent.com/CrazyVideoGamez/Named-Event-Listeners/master/namedEventListeners.js"></script>
```
Or, if you want the minified version:
https://raw.githubusercontent.com/CrazyVideoGamez/Named-Event-Listeners/master/namedEventListeners.min.js
And, to insert into html:
```html
<script src="https://raw.githubusercontent.com/CrazyVideoGamez/Named-Event-Listeners/master/namedEventListeners.min.js"></script>
```
## Usage
You can use named event listeners as so:
```js
el = document.querySelector("#target-element");

// You can also use addNEL
addNamedEventListener("Cool Event Listener", el, "keydown", (event) => {
  ...
})
```
Get all named event listeners
```js
// You can also use getNEL
console.log(getNamedEventListeners())
```
And then remove:
```js
// You can also use removeNEL
removeNamedEventListener("Cool Event Listener")
```
## Full options
### addNamedEventListener
```js
addNamedEventListener(name, element, type, listener, options={})
```
name: name of named event listener, a string
element: 
