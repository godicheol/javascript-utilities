[DEMO](https://godicheol.github.io/javascript-utilities/)

### utils.compare(a, b)
```js
var arr = [
    "A", undefined, "a-23",
    "#google", 11, "!",
    "a", true, null,
    false, "12", "!google",
    "a-1", "A", 13,
    "#", 1, "1"
];

var res = arr.sort(utils.compare);
// utils.bubbleSort(arr, utils.compare);
// utils.insertionSort(arr, utils.compare);
// utils.mergeSort(arr, utils.compare);

// [
//     false, true, 1, 11, 13, "1", "12", "!", "!google", "#", "#google", "A", "a", "A", "a-1", "a-23", null, undefined
// ]
```

### utils.parsePath(path)
```js
var path = "./fwe/gg/abc.zip";
var res = utils.parsePath(path);
// {
//     baseName: "abc",
//     extension: ".zip",
//     fileName: "abc.zip",
//     isDirectory: false,
//     isFile: true,
//     mimeType: "application/zip"
// }
```

### utils.execQuery(data, query)
```js
var data = {
    id: 1,
    name: "raccoon",
    type: "animal",
    size: {
        height: 20,
        weight: 100,
    },
    array: [1,2,3],
    array2: null
}
var query = {
    id: 1,
    name: {
        $in: ["raccoon", "abcdefg"],
        $nin: ["dog", "cat"],
        $regexp: /raccoon/
    },
    type: /^ani/, // regexp
    $and: [{
        size: {
            $gt: 1, // object keys length
            $lt: 3
        }
    }, {
        size: {
            $or: [{
                weight: {
                    $gt: 90, // number
                    $lt: 110
                }
            }, {
                height: {
                    $gte: 20, // number
                    $lte: 20
                }
            }]
        }
    }],
    array: {
        $gt: 2, // array length
        $lt: 4
    },
    array2: {
        $exists: false // null or undefined
    }
}

var res = utils.execQuery(data, query);
// true
```

