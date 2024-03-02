declare global {
  interface Array<T> {
    myApply(context: any, args: any[]): any
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