function drop(arr: number[], callback: (val: number) => boolean) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (callback(arr[i])) {
      arr.splice(i, 1)
    } else {
      break
    }
  }
}

const arr1 = [1, 2, 3, 4, 5]
drop(arr1, (val) => val > 6)
console.log(arr1)