function findMinAndRemove(array){
  let smallestElem = array[0]
  array.forEach(elem => {
    if (elem < smallestElem) {
      smallestElem = elem
    }
  }
)
  var index = array.indexOf(smallestElem)
  return array.splice(index, 1)
}

function insertionSort(array){
  let newArr = []
  while (array.length > 0) {
    newArr.push(findMinAndRemove(array)[0])
  }
  return newArr
}
