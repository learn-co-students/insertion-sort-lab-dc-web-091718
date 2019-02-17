function findMinAndRemove(array) {
  //set min to first element
  //loop through and compare to each element
  //remove min once found
  let min = array[0];
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array) {
  //account for base case. Want unsorted array to be empty
  let min;
  let sortedArr = [];
  while (array.length != 0) {
    min = findMinAndRemove(array);
    sortedArr.push(min);
  }
  return sortedArr;
}
