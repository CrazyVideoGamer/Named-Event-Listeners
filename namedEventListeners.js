const deepCopy = obj => {
    let outObject, value, key

    if (typeof obj !== "object" || obj === null) {
        return obj
    }
    outObject = Array.isArray(obj) ? [] : {}

    for (key in obj) {
        value = obj[key]
        outObject[key] = (typeof value === "object" && value !== null) ? deepCopyFunction(value) : value
    }

    return outObject
}


function addNamedEventListener(name, element, type, listener, options={}) {
	if (element === '' || element === null) {
		element = document;
	}
	
	_namede = addNamedEventListener._
	if (name in _namede && _namede[name] == element) {
		throw "Name already exists"
	}
	_namede[name] = {'type':type, 'element':element, 'listener':listener, 'options':options}
	element.addEventListener(type, listener, options)
}

function getNamedEventListeners() {
	all = deepCopy(addNamedEventListener._);
	return all;
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
let [addNEL, removeNEL, getNELs] = [addNamedEventListener, removeNamedEventListener, getNamedEventListeners]

// Makes _ non-writeable
Object.defineProperty(addNamedEventListener, '_', {
	value: {},
	writeable: false
})

export {addNamedEventListener, removeNamedEventListener, getNamedEventListeners, addNEL, removeNEL, getNELs}
