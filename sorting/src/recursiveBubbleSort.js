exports.rBubbleSort = function rBubbleSort(array,index=0) {
    if (index == array.length-1) {
        return array;
    }
    
    for (var i=index; i<array.length; i++) {
        if(array[index] > array[index+1]) {
            [array[index],array[index+1]] = [array[index+1],array[index]];        
        }
        array = rBubbleSort(array,index+1);
    }
    
    return array;
}

