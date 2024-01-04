/*
 * Before the optional chaining operator (?.) existed, it was sometimes
 * troublesome to access deeply-nested properties in huge JavaScript objects
 * when some of the intermediate properties might not be present.
 */

// @ts-ignore
const get = (obj: any, path: any[] | string, defaultValue: any = undefined) => {
  // if path is not an array, convert it to an array
  // e.g. "a.b.c" => ["a", "b", "c"]
  const properties = Array.isArray(path) ? path : path.split(".");
  // console.log("properties ", properties);
  // properties  [ 'a', 'b', 'c' ]

  // if obj is null or undefined, return the default value
  if (obj == null) return defaultValue;

  // if the path length is 0, we have reached our destination
  // and we should return the object
  if (properties.length === 0) return obj;

  // otherwise, remove the first element from the path
  // and recursively call get with the updated path and obj
  return get(obj[properties.shift() as string], properties, defaultValue);
};

const obj = {
  a: {
    b: {
      c: 1,
    },
  },
};

console.log(get(obj, "a.b.c")); // => 1
console.log(get({ a: [{ b: { c: 3 } }] }, "a.0.b.c")); // 3