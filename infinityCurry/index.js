function infinityCurry() {
  var result = ''
  const [argument] = arguments
  if (!argument) {
    return result
  } else {      
    result = argument + result
    return infinityCurry
  }
}

// console.log( say('Foo')('bar')() ) // => "Foo bar "
console.log( infinityCurry('Hi')('my')('name')('is')('Foo')() ) // "Hi my name is Foo "