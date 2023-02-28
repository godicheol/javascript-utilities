[DEMO](https://godicheol.github.io/javascript-utilities/)

### utils.compare(a, b)
```js
var res = [null, "a2", 1, undefined, "a11", "2", "a1"].sort(utils.compare);
// res === [1, '2', 'a1', 'a2', 'a11', null, undefined];
```

### utils.reducePromise(array, function, initialValue)
```js
utils.reducePromises([1,2,3,4,5], function(prev, curr, index) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(prev + curr);
        }, 1000);
    });
}, 0).then(function(res) {
    // res === 15
});
```


