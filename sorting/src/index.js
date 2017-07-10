var selectionSort = require("./selectionSort");
var insertionSort = require("./insertionSort");
var bubbleSort = require("./bubbleSort");
var recursiveBubbleSort = require("./recursiveBubbleSort");

var array = [64 ,25, 12, 22, 11, 22];
array = selectionSort(array);
console.log("Selection Sort " + array);


array = [64 ,25, 12, 22, 11, 22];
array = insertionSort(array);
console.log("Insertion Sort " + array);

array = [64 ,25, 12, 22, 11, 22];
array = bubbleSort(array);
console.log("BubbleSort Sort " + array);

array = [64 ,25, 12, 22, 11, 22];
array = recursiveBubbleSort(array);
console.log("Recursive Bubble Sort " + array);
