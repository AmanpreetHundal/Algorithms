
function insertionSort (array) {
    var value ;
    for (var i = 1; i<array.length; i++){
        value = array[i];
        for (var j = i-1; (j >= 0 && value < array[j]) ; j--) {
            array[j+1] = array [j];            
        }       
         array[j+1] = value;
    }
    return array;
}

module.exports = insertionSort;