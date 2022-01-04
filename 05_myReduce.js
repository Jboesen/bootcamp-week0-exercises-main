/**
  Implement your own version or Array.reduce()
  The function should take:
    an array: arr
    a function: f
    an initial value: init
  Example:
    myReduce([12, -3, 6], (accumulator, current) => accumulator + current, 0)
    -> 15
    myReduce([12, -3, 6], (accumulator, current) => accumulator + current, 5)
    -> 20
*/

const myReduce = (arr, f, init) => {
  reduceHelper(init, arr)
}

const reduceHelper = (x, arr) => {
  return reduceHelper(f(total, current), arr)
}

const euros = [29.76, 41.85, 46.5]

const f = (total, current) => total + current

myReduce(euros, f, init)
module.exports = myReduce
