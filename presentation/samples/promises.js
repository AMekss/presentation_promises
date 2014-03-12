// Making promise
var myDeffered = $.Deferred()
var myPromise = myDeffered.promise()

myPromise.state()     // => "pending"
myPromise.resolve()   //=> TypeError: myPromise.resolve is not a function

myDeffered.state()    // => "pending"
myDeffered.resolve()  // => Defered Object
myDeffered.state()    // => "resolved"

myPromise.state()     // => "resolved"

myDeffered.reject()   // => Defered Object
myDeffered.state()    // => "resolved"

myPromise.state()     // => "resolved"
