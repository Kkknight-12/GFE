declare global {
  /*
   * T represents the type of elements in the array. When
   * you use this interface, you can replace T with any
   * type, like number, string, etc.
   *  */
  interface Array<T> {
    /*
     * square(): Array<number>; method declaration inside
     * the interface indicates that this method, when
     * called on an array, will return a new array where
     * each element is a number. This is because squaring
     * any number will always result in a number,
     * regardless of the type of elements in the original
     * array.
     *  */
    square(): Array<number>
  }
  interface Function {
    myApply(this: any, thisArg: any, argArray?: any[]): any
    myApplyBind(this: any, thisArg: any, argArray?: any[]): any
    myApplyCall(this: any, thisArg: any, argArray?: any[]): any
    myApplySymbol(this: any, thisArg: any, argArray?: any[]): any
    myCall(this: any, thisArg: any, ...argArray: any[]): any
  }
}
export {}

/*
 * If a file doesn't have any top-level import or export statements, it's
 * treated as a script, and global augmentations are not allowed in scripts.
 *
 * The export {} statement doesn't actually export anything, but it does
 * make the file a module, which allows the global augmentation.
 *  */