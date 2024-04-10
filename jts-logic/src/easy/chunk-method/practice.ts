const arr = [1, 2, 3, 4, 5]

const chu = (arr: any[], size = 1) => {
  let newArr: number[][] = []
  for (let i = 0; i < arr.length; ) {
    let tempArr: number[] = []

    for (let j = 0; j < size && i < arr.length; j++) {
      // console.log('i ', i)
      // console.log('arr[i] ', arr[i])
      tempArr.push(arr[i]) && i++
    }
    newArr.push(tempArr)
    tempArr = []
  }
  return newArr
}

console.log(chu(arr, 2))
console.log(chu(['a', 'b', 'c', 'd']))
// => [['a'],['b'], ['c'], ['d']]
console.log(chu([1, 2, 3, 4], 2))
// => [[1, 2], [3, 4]]
console.log(chu([1, 2, 3, 4], 3))
// => [[1, 2, 3], [4]]