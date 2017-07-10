
function selectionSort (array) {
    var minIndex ;
    for (var i = 0; i<array.length; i++){
        minIndex = i;
        for (var j = i+1; j < array.length; j++) {
            if(array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
       array = swap(array,minIndex,i);
    }
    return array;
}

function swap (array,i,j) {
    [array[i],array[j]] = [array[j],array[i]];
    return array;
}

module.exports = selectionSort;