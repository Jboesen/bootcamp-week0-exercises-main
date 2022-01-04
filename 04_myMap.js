/**
  Implement your own version or Array.map()
  The function should take as input:
    an array: arr
    a function: f
  The function should output a new list that is arr, but with the function applied to each element
  Try recursion rather than a for loop!
  Example:
    myMap([1, 2, 3], v => v * 2)
    -> [2, 4, 6]
 */

const myMapForEach = (arr, f) => {
  arr.array.forEach(e, i => {
    arr[i] = f(e)
  });
}

const f = (e) => {
  return e + 1
}

const myMap = (arr, f) => {
  i = 0
  mapHelper(arr, f, i, arr.length)
}

const mapHelper = (arr, f, i, l) => {
  if (l == i)
    return
  arr[i] = f(arr[i])
  mapHelper(arr, f, i + 1, l)
}


const arr = [1, 2, 3, 4, 5]
myMap(arr, f)

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

module.exports = myMap
