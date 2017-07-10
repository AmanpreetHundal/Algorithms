function recursiveBubbleSort(array,index) {
    if((array[index] > array[index+1])) {
        [array[index],array[index+1]] = [array[index+1],array[index]];
    }
    if (index == array.length-1) {
        return array;
    }
    else {
        recursiveBubbleSort(array,index+1)
    }
    for (var i=0; i< array.length; i++){        
        for (var j=0; j<array.length-1; j++) {            
            if(array[j] > array[j+1]){                
              [array[j],array[j+1]] = [array[j+1],array[j]];
            }
        }
    }
    return array;
}
module.export = recursiveBubbleSort;