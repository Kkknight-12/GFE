const falsy = [false, null, 0, '', undefined, NaN]

// falsy.forEach((falsy) => console.log('falsy -> ', !!falsy))

const compactR = (args: any[]) => {
  for (let i = 0; i < args.length; i++) {
    if (!args[i]) {
      args.splice(i, 1)
    }
  }
  return args
}

console.log(compactR(['hello', 123, [], {}, function () {}]))