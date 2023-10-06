export function find<T>(haystack: T[], needle: T): number | never {
  let lo = 0
  let hi = haystack.length - 1
  let mid = hi >>> 1
  
  while (lo <= hi) {
    if (haystack[mid] === needle) {
      return mid
    } else if (haystack[mid] < needle) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
    mid = (hi + lo) >>> 1
  }
  
  throw new Error('Value not in array')
}