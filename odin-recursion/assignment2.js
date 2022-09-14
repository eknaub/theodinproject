function mergeSort(arr) {
  if(arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];

  while(left.length && right.length){
    if(left[0] <= right[0]){
      result.push(left.shift());
    }else{
      result.push(right.shift());
    }
  }

  while(left.length) result.push(left.shift());
  while(right.length) result.push(right.shift());

  return result;
}

console.log("Merge Sort");
console.log(mergeSort([]))
console.log(mergeSort([10, 5, 3, 1, 2, 8]));
console.log(mergeSort([42, 230, 120, 34, 21, 666, 22]));