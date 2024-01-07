// Shorter solution

/**
 * @param {number} value The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
// @ts-ignore
export default function inRangeSol1(
  value: number,
  startParam: number,
  endParam: number,
): boolean {
  // if endParam is undefined, startParam becomes endParam and start is set to 0
  const [start, end] =
    endParam !== undefined ? [startParam, endParam] : [0, startParam]

  // math.min and math.max are used to support negative ranges
  // e.g. inRange(-3, -2, -6) => inRange(-3, -6, -2)
  return Math.min(start, end) <= value && value < Math.max(start, end)
}

// One-liner

/*
 * This even shorter solution relies on setting a default value for end to be
 * 0. This works because if the user omits the end parameter, the range
 * becomes [start, 0] but will be flipped around by the Math.min() and Math.max().
 *  */

// @ts-ignore
export default function inRangeSol2(value: number, start: number, end = 0) {
  return Math.min(start, end) <= value && value < Math.max(start, end)
}