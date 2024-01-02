export const clamp = (clamp, lowerBound, upperBound) => {
  if (clamp < lowerBound) {
    return lowerBound
  } else if (clamp > upperBound) {
    return upperBound
  } else {
    return clamp
  }
}

// solution

// export default function clamp(value, lower, upper) {
//   return Math.min(upper, Math.max(lower, value))
// }

// https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript
