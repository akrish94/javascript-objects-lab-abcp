var recipes = {}

function updateObjectWithKeyAndValue(object,key,value) {
  return object.assign({}, object, {[key]: value})
}


function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return object
}

  
function deleteFromObjectByKey(object,key){
  var newObject = object.assign({}, object)
  delete newObject[key]
  return newObject
}
  
   
function destructivelyDeleteFromObjectByKey(object,key) {
  
}
  describe('destructivelyDeleteFromObjectByKey(object, key)', function() {
    it('returns object without the delete key/value pair', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(newObj['prop']).toBe(undefined)
    })

    it('modifies the original object', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(obj['prop']).toBe(undefined)
    })
  })

})