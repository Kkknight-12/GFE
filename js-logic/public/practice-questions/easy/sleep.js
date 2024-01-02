// Asynchronous sleep function
// the setInterval will run before and after the sleep function
// which means sleep function is not blocking the code
// remaing code will run while the sleep function is running

export default async function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export async function greeting() {
  console.log("Hello!")

  // either this code
  //   await sleep(2000)
  //   console.log("Bye.")

  // or
  sleep(2000).then(() => {
    console.log("Bye.") // Only logs after 2000 milliseconds (2 seconds)
  })
}

// uncomment this to see the setInterval running
// setInterval(() => {
//   console.log("Tick")
// }, 500)

greeting()
