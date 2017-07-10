function recursiveBubbleSort(array,index = 0) {
    if (index == array.length) {
        return array;
    }
    if(array[index] > array[index+1]) {
        [array[index],array[index+1]] = [array[index+1],array[index]];
        return array;
    }
    for (var i=0; i<array.length; i++) {
        while (index < array.length) {
            array = bubbleSort1(array,index+1)
        }
    }
    return array;
}
module.export = recursiveBubbleSort;