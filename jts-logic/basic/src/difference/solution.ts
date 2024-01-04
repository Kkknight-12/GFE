export default function differenceS1<T>(
  array: Array<T>,
  values: Array<T>
): Array<T> {
  const result = [];

  // Create a set of all the values in the values arrays.
  const valuesSet = new Set(values);

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    // Check if the value is in the values set.
    if (!valuesSet.has(value) && !(value === undefined && !(i in array))) {
      result.push(value);
    }
  }

  return result;
}

/*
* The line of code you're asking about is a conditional statement that checks two conditions before deciding whether to push a value into the `result` array.

Here's a breakdown of the conditions:

1. `!valuesSet.has(value)`: This checks if the current value from the `array` is not present in the `valuesSet`. If the value is not in the set, it returns `true`.

2. `!(value === undefined && !(i in array))`: This is a bit more complex. It checks if the current value is not `undefined` or if the current index `i` is not in the `array`. If either of these conditions is `true`, it returns `false`, and the `!` operator negates this to `true`.

So, the entire condition will only be `true` if the current value is not in the `valuesSet` and either the value is not `undefined` or the index `i` is in the `array`. If both these conditions are `true`, the value is pushed into the `result` array.
*  */