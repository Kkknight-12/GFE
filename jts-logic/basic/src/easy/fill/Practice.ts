function bharo(arr: any[], value: string, start: number = 0, end?: number) {
  if (end === undefined) {
    end = arr.length
  }
  for (let i = start; i < end; i++) {
    arr.splice(i, 1, value)
  }
  return arr
}

console.log(bharo([1, 2, 3], 'a'))
console.log(bharo([4, 6, 8, 10], '*', 1, 3))
console.log(bharo([4, 6, 8, 10, 12], '*', -3, -1))