// вывод в консоль IDE vs 

'use strict';
// 1.1

function ReturnNumber(number) {
    return number;
}
// 1.2

function ReturnOfArgument(Item1, Item2) {
    if (isNaN(Item1)) {
        return ("a - not a number");
    }
    else {
        if (isNaN(Item2)) {
            return ("b - not a number");
        }
        else return Item1 + Item2;
    }
}

// 1.3

function AnArray() {
    let myArray = [20,5,"prosyakova", 10,66,"darya"];
    console.log('Input data: ');
    console.log(myArray);
    let myNewArray = myArray.map((value) =>
        isNaN(value) ? value = 0 : value *= value
    )
    console.log('Answer:');
    console.log(myNewArray);
}
