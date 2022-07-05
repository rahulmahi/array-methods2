//join()

let fruits = ["apple","banana","mango"];
//let fruits = [1,2,3,4]
let d = fruits.join(" ");

console.log(d);

//keys()

 let arr1 = ["blue","red","orange","red"];

 let val = arr.keys()
  for(let key of val){
  console.log(key);
  }

 //lastIndex()

 let arr2 = ["a","b","c","b"];

 let val2 = arr.lastIndexOf("b");

 console.log(val2);

//pop()

 let items = ["dog","my","you"];

 console.log(items.pop());

//push

let item = ["dog","my","you"];

items.push("cat");

console.log(items);

//reduce()

let arr = ["javascript ","is ","fun ","language"];

//let arr = [1,2,3,4]
//let z = arr.reduce();

function names(accumlatoe,value)
{
    return accumlatoe + value;

}
let z = arr.reduce(names);
console.log(z)