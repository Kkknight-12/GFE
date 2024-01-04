export default function get<T>(
  objectParam: Record<string, any>,
  pathParams: string | Array<string>,
  defaultValue?: T
): T {
  // if path is not an array, convert it to an array
  const path = Array.isArray(pathParams) ? pathParams : pathParams.split(".");

  let index = 0;
  let length = path.length;
  let object = objectParam;

  // if obj is not null  and index is less than length
  while (object != null && index < length) {
    // assign object to object[path[index++]]
    // index++ means index = index + 1 after the assignment
    object = object[path[index++]];
  }

  // return object if index and length are equal
  const value = index && index === length ? object : undefined;
  return (value !== undefined ? value : defaultValue) as T;
}

/*
 * Edge Cases:
 * Bad path inputs like get(obj, 'a.b..c') and get(obj, '') are unresolved
 * and the defaultValue should be returned.
 * The solution only works for simple objects. It doesn't work with objects
 * with
 *
 * Symbols as keys.
 * Map and Set as values.
 *
 * For these cases you can (and should) clarify the expected behavior with
 * the interviewer.
 *  */