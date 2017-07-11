var selectionSort = require("./selectionSort");
var insertionSort = require("./insertionSort");
var bubbleSort = require("./bubbleSort");
var recursiveBubbleSort = require("./recursiveBubbleSort");

/*var array = [64 ,25, 12, 22, 11, 22];
array = recursiveBubbleSort.rBubbleSort(array);
console.log("Recursive Bubble Sort " + array);*/

module.exports = {
selectionSort,
insertionSort,
bubbleSort,
recursiveBubbleSort,
};
