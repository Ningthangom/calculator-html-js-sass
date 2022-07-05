

// bind click handler to element that is added later/dynamically
document.addEventListener('click', function(e){
    if(e.target && e.target.id == '1'){
         //do something
         console.log("1")
    }
});

const fistArray = [];
let firstNumber; 
let joinedfistArray;

const secondArray = [];

// write one to an rray 
function writeNumberOne(id) {
    var el = document.getElementById(id);
    /*  el.style.color = "blue"; */
    console.log("one");
   
    fistArray.push(1);
    console.log(fistArray);
     joinedfistArray = fistArray.join("");
     console.log( joinedfistArray);
     const stringToNumber = parseFloat(joinedfistArray);

     firstNumber = stringToNumber;


       console.log(typeof stringToNumber);
       console.log("number is ", stringToNumber);
    document.getElementById("screen").innerHTML = `${joinedfistArray}`;
}


// write two to an array 
function writeNumberTwo(id) {
    var el = document.getElementById(id);
    /*  el.style.color = "blue"; */
    console.log("one");
    fistArray.push(2);
    console.log(fistArray);
    joinedfistArray = fistArray.join('');
     console.log(joinedfistArray);
     const stringToNumber = parseFloat(joinedfistArray);


     firstNumber = stringToNumber;


     console.log(stringToNumber);
     console.log("number is ", stringToNumber);
    document.getElementById("screen").innerHTML = `${joinedfistArray}`;
}

// write three to an array 
function writeNumberThree(id) {
    var el = document.getElementById(id);
    /*  el.style.color = "blue"; */
    console.log("three");
    fistArray.push(3);
    console.log(fistArray);
    joinedfistArray = fistArray.join("");
    console.log( joinedfistArray);
    const stringToNumber = parseFloat(joinedfistArray);

    firstNumber = stringToNumber;


    console.log("number is ", stringToNumber);
    document.getElementById("screen").innerHTML = `${joinedfistArray}`;
}


// when press + 
function clickPlus (id) {

     document.getElementById("screen").innerHTML = `${joinedfistArray} + `;
      fistArray.push("+");
}


// when cliked on equal 
function clickEqual(id) {

   /*  const arraybeforeSign  = fistArray.slice("+")
    console.log(arraybeforeSign); */
/*     let result = []

  fistArray.forEach(function(element) {
    if(element = '+')
        result.push([])
    result[result.length - 1].push(element)

    

})

console.log(result); */

/*     let fistNumbers = [];
    for (let i = 0; i < fistArray["+"]; i++) {
        firstNumber.push(fistArray[i])
    }

    console.log(fistNumbers); */


    const sortedArray = fistArray.reduce(
        (inital, next) => {
            const lastIndex = inital.length - 1;
            if (typeof next === "number") {
                inital[lastIndex].push(next);
            } else {
                inital.push([]);
            }
            return inital;
        },
        [[]],
    );

    console.log("this is sorted array ", sortedArray)



}


// delete number from calculator 
function deleteArray(id) {
    var el = document.getElementById(id);
    /*  el.style.color = "blue"; */
    console.log("one");
    fistArray.length = 0;
     console.log(fistArray);
     const joinedfistArray = fistArray.join("");
    document.getElementById("screen").innerHTML = `${joinedfistArray}`;
}


// when press add or minus or multiply
// create a new array 
// add the numbers to the second array 

// how do i decide to put it in the first or second or third array;

// put all the numbers in one array including the + and - and %
// when press equal 
// and take all the numbers from the front of + and take all the numbers after +
// then convert them into numbers and then add them 


// when click equal 
// sort the array = split the array based on a string 
// do math operation of the first two array based on the first string
    // join the numbers from the first two arrays and parseFloat to convert from string to number
    // perform math operation based on the first string 
    // save the result back into the array as the first index of the array 
    // 
// print the result out save it as a const 
// delete the first array and add the result to the first array again


// numbers before the math operation that
// numbers after the math operation 
// numbers after the equal sign 
