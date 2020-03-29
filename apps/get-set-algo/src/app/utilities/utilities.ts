export class Utilities {
  static swap(arr: any[], a: number, b: number) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
  }
}