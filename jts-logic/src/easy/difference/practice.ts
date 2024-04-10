const aray = [1, 2, 3, 4]
const value = [2, 3, 1]

for (let i = 0; i < value.length; i++) {
  const index = aray.indexOf(value[i]) // Find the index of value[i] in the aray array

  if (index !== -1) {
    aray.splice(index, 1) // Remove the element from the aray array
  }
  console.log(aray)
}

console.log(aray) // Outputs: [4]