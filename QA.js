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
