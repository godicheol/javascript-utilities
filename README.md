[DEMO](https://godicheol.github.io/javascript-utilities/)

### utils.compare(a, b)
```js
var res = [null, "a2", 1, undefined, "a11", "2", "a1"].sort(utils.compare);
// res === [1, '2', 'a1', 'a2', 'a11', null, undefined];
```

### utils.reducePromises(array, function, initialValue)
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

### utils.execQuery(data, query)
```js
var data = {
    id: 1,
    name: "raccoon",
    size: {
        height: 20,
        weight: 100,
    },
    array: [1,2,3]
}
var query = {
    id: {
        $lt: 2
    },
    name: {
        $in: ["raccoon", "abcdefg"]
    },
    $and: [{
        size: {
            height: {
                $ne: 19
            }
        }
    }, {
        size: {
            $or: [{
                weight: {
                    $lt: 120
                }
            }, {
                height: {
                    $gt: 9999
                }
            }]
        }
    }],
    array: {
        $not: {
            $eq: [1,2]
        }
    }
}

var res = utils.execQuery(data, query);
// res === true
```

