const sleep = (duration: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done!')
    }, duration)
  })
}

console.log('Hello!') // 1st
sleep(2000).then((resp) => {
  console.log(resp) // 4th
})

// Asynchronous sleep
async function greeting() {
  console.log('Hello!') // 2nd
  await sleep(2000) // if we remove await, then it will
  // log immediately after 'Hello!' which will be
  // synchronous/blocking code
  console.log('Bye.') // Only logs after 2000 milliseconds (2 seconds)
}

greeting()

// setInterval(() => {
//   console.log('Tick')
// }, 500)

console.log('chalo chalte hai!') // 3rd