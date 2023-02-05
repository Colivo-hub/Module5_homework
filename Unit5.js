// task1

/*let a = +prompt("Введите значение");
if (typeof a === "number" && !isNaN(a)) {
    console.log(a % 2 === 0 ? "Четное":"Нечетное")
}
else { 
    console.log("Упс, кажется, вы ошиблись")
}*/

// task2

/*let x = 6
const typeX = typeof x
if ((typeX == "number"|| typeX=="bigInt") && !(isNaN(x))){
    console.log(x + " - число")}
else if (typeX == "string"){
    console.log(x + " - строка")}
else if (typeX == "boolean"){
    console.log(x + " - логический тип")
}
else{
    console.log("Тип " + x + " не определен")
}*/

// task3

/* function reverseString(string) {
    return string.split("").reverse().join("");
}

reverseString("hello");

function revString(str) {

    let splitString = str.split(""); 

    let reverseArray = splitString.reverse(); 

    let joinArray = reverseArray.join(""); 
    

    return joinArray;
}
revString("hello");*/

// task4

/* function randomValue() {
    return Math.floor(Math.random() * 101);
  }
  
  console.log(randomValue());*/

// Task5
  
 /* const array1 = [1,2,3,4,5];
    console.log(array1.length)
array1.forEach(function(item,index,array){
    console.log(item);
  })*/

// task6

/*const arr= [1,2,"3",4,5]
const x = typeof(arr[0]);

arr.every(element=>typeof(element)==x);*/
//

// task7

/* const arr = [0,null,2,'hi',4,NaN,6,7,9,11];
let oddCount = 0;
let evenCount = 0;
let zeroCount = 0;
let unknownCount = 0;
for(let i=0; i < arr.length; i++){
    if(typeof arr[i] === 'number'&& !isNaN(arr[i])){
        if(arr[i] === 0){
            zeroCount += 1
        }
        else if((arr[i] % 2) === 0){
            evenCount += 1
        }else if((arr[i] % 2) !== 0){
            oddCount += 1
        }
    }else{
        unknownCount += 1
    }
    }
    console.log(evenCount  + " - количество четных чисел")
    console.log(oddCount  + " - количество нечетных чисел")
    console.log(zeroCount + " - количество 0 в массиве")
    console.log(unknownCount + " - количество неопределенных значений")
     */

// task8
 
/* const myMap = new Map()

myMap.set('один', 1)
myMap.set('два', 2)
myMap.set('три', 3)
myMap.set('четыре', 4)
myMap.set('пять', 5)

for(const[key, value] of myMap){
    console.log(`Ключ - ${key}, значение - ${value}`)
} */



