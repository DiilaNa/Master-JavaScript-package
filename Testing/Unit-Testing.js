const add = (a,b) => {
    return a + b;
}

const multiply = (a,b) => {
    return a * b;
}

function test(description,fn){
    try {
        console.log(description);
        fn();
        
    } catch (error) {
        console.error(error);
        
    }
}

test("add(2,3) should return 5",() => {
    const result = add(2,3)
    if(result == 5) console.log("Test case Passed");
    else throw new Error("Expected 5 but got " + result)
    
})

test("add(2,3) should return 6", () => {
  const result = multiply(2, 3);
  if (result == 6) console.log("Test case Passed");
  else throw new Error("Expected 6 but got " + result);
});