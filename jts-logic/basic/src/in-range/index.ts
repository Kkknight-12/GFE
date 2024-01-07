/*
 * Implement a function inRange(value, [start=0], end) to check if a number
 * value is between start and up to, but not including, end. If only 2
 * arguments are specified, the second argument becomes end and start is set
 * to 0. If start is greater than end, the parameters are swapped to support
 * negative ranges.
 *
 * Arguments:
 * value (number): The number to check.
 * [start=0] (number): The start of the range.
 * end (number): The end of the range (not including).
 *  */

export default function inRange(
  value: number,
  start: number = 0,
  end: number = 0,
): boolean {
  // if only 2 arguments are specified, the second argument becomes end
  // and start is set to 0
  if (end === 0) {
    end = start
    start = 0
  }

  // if start is greater than end, the parameters are swapped to support
  // negative ranges
  if (start > end) {
    ;[start, end] = [end, start]
  }
  console.log({ value, start, end })
  // check if value is in range
  return value >= start && value < end
}

console.log(inRange(3, 2, 4)) // => true
console.log(inRange(-3, -2, -6)) // => true