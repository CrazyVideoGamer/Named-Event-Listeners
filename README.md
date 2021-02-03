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
Add a named event listener
```js
addNamedEventListener(name, element, type, listener, options={})
```
name: the name of named event listener, type string
element: the target elment, type HTML object
type: What type of named event listener it is, e.g. keydown. type string
listener: The listener to run when event is detected. type function
options: the options for the named event listener (same as normal named event listener options). type object
### removeNamedEventListener
Remove a named event listener
```js
removeNamedEventListener(name)
```
name: the name of named event listener, type string
### getNamedEventListeners
Get all named event listeners
```js
getNamedEventListeners()
```
No arguments
### addNEL
```js
addNEL(name, element, type, listener, options={})
```
Same as addNamedEventListener
### removeNEL
```js
removeNEL(name)
```
Same as removeNamedEventListener
### getNEL
```js
getNELs()
```
Returns 
