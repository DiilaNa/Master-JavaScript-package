console.log("Test");

// Find the positve numbers from the array

let arr = [1,-2,3,-4,6,7]

for (let i = 0; i < arr.length; i++) {
    if(arr[i]>0){
        console.log("Positive Numbers", arr[i]);
        
    }else{
        console.log("Negative Numbers", arr[i]);
    }
}

// Write the out put of the following code

console.log(
    [null] == false,
    [undefined] == false // === show compile error as it checks not only value but the data type too
   );

   // Result is True True

   // == -> check only the values
   // == -> check value and data type

   //  false converts to 0 
   // [null] -> "" , primitive non primitive [].tostring
   // "" == 0
   // 0 == 0
   // true