var expect = require("chai").expect;
var sorter = require("../src/index");

describe("Sorting Algorithms", function() {
    describe("Bubble Sort", function() {
        it("Sorts an array", function(){
            var array = [64 ,25, 12, 22, 11, 22];            
            var sortedArray = [11, 12, 22, 22, 25, 64];

            expect(sorter.bubbleSort(array)).to.deep.equal(sortedArray);
        });
    });
    describe("Insertion Sort", function() {
        it("Sorts an array", function(){
            var array = [64 ,25, 12, 22, 11, 22];            
            var sortedArray = [11, 12, 22, 22, 25, 64];

            expect(sorter.insertionSort(array)).to.deep.equal(sortedArray);
        });
    });
    describe("Selection Sort", function() {
        it("Sorts an array", function(){
            var array = [64 ,25, 12, 22, 11, 22];            
            var sortedArray = [11, 12, 22, 22, 25, 64];

            expect(sorter.selectionSort(array)).to.deep.equal(sortedArray);
        });
    });
    describe("Recursive Bubble Sort", function() {
        it("Sorts an array", function(){
            var array = [64 ,25, 12, 22, 11, 22];            
            var sortedArray = [11, 12, 22, 22, 25, 64];

            expect(sorter.recursiveBubbleSort.rBubbleSort(array)).to.deep.equal(sortedArray);
        });
    });
});