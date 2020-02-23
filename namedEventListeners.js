function addNamedEventListener(name, type, listener, element=document, options={}) {
	_namede = addNamedEventListener._
	if (name in _namede && _namede[name] == element) {
		throw "Name already exists"
	}
	_namede[name] = {'type':type, 'element':element, 'listener':listener, 'options':options}
	element.addEventListener(type, listener, options)
}

function removeNamedEventListener(name) {
	_namede = addNamedEventListener._
	if (!(name in _namede)) {
		throw name + " does not exist"
	}
	_namede[name].element.removeEventListener(_namede[name].type, _namede[name].listener)
	delete _namede[name]
}

// Make some aliases so it is easier to type
let addNEL = addNamedEventListener
let removeNEL = removeNamedEventListener

Object.defineProperty(addNamedEventListener, '_', {
	value: {},
	writeable: false
})
