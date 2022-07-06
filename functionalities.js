

// bind click handler to element that is added later/dynamically
document.addEventListener('click', function(e){
    if(e.target && e.target.id == '1'){
         //do something
         console.log("1")
    }
});

const fistArray = [];
let inputString = "";
let firstNumber; 
let joinedfistArray;

const secondArray = [];

function calculation (firstNumber, secondNumber , operation) {

    if(operation == '+' ){
        return firstNumber + secondNumber;
    }else if (operation == '-' ){
        return firstNumber - secondNumber;
    }else if (operation == "÷") {
        return firstNumber / secondNumber;
    }else if (operation == "x") {
        return firstNumber * secondNumber;
    }else if (operation == '%') {
        return firstNumber % secondNumber;
    }
}


// checking if a math operator exist
function checkExistingOperator (string,enteredOperator){
    console.log("this is the first index of the string: ", typeof string[0], string[0])
    if (string[0] ==='-'){
        console.log("this is the whole string before removing minus: ", string);
        // convert string to an array 
        /* let stringToArray = [...string];
        console.log("string to array: ", stringToArray); */

        
        let stringNoMinus = string.substring(1);
        console.log("this is String without minus: ", stringNoMinus)

        // Array to s
         if (string.charAt(string.search(/[+\-\*\/\÷\x\%]/))) {
             //split the string values
             const values = stringNoMinus.split(/[+\-\*\/\÷\x\%]/);
             console.log("checking nagative value", values);
             // to do: need to figure out how to handle negative value
             console.log(
                 "this is negative number: ",
                 parseFloat(`-${values[0]}`),
             );
             //get the operator
             const operators = stringNoMinus.charAt(
                 stringNoMinus.search(/[+\-\*\/\÷\x\%]/),
             );

             //call calculation function to do math operation on the first two
             const calResult = calculation(
                 //adding nagative value back since it was removed
                 parseFloat(`-${values[0]}`),
                 parseFloat(values[1]),
                 operators,
             );
             //remove the first two elements
             const removeFirstTwo = values.splice(0, 2);
             // add the calculation result to the start of the array;
             values.unshift(calResult);

             // change value back into string
             string = values.join();
             console.log("array to string: ", string);

             // add new operator to new string;
             string = string.concat(enteredOperator);
             // then add the operator again;
             /* document.getElementById("screen").innerHTML = `${string}`; */
             return string;
         } else {
             string = string.concat(enteredOperator);
             console.log("string when no operator: ", string);
             return string;
         }
    } else {
         if (string.charAt(string.search(/[+\-\*\/\÷\x\%]/))) {
             //split the string values
             const values = string.split(/[+\-\*\/\÷\x\%]/);
             console.log("checking nagative value", values);
             // to do: need to figure out how to handle negative value

             //get the operator
             const operators = string.charAt(string.search(/[+\-\*\/\÷\x\%]/));

             //call calculation function to do math operation on the first two
             const calResult = calculation(
                 parseFloat(values[0]),
                 parseFloat(values[1]),
                 operators,
             );
             //remove the first two elements
             const removeFirstTwo = values.splice(0, 2);
             // add the calculation result to the start of the array;
             values.unshift(calResult);

             // change value back into string
             string = values.join();
             console.log("array to string: ", string);

             // add new operator to new string;
             string = string.concat(enteredOperator);
             // then add the operator again;
             /* document.getElementById("screen").innerHTML = `${string}`; */
             return string;
         } else {
             string = string.concat(enteredOperator);
             console.log("string when no operator: ", string);
             return string;
         }

    }
    
    

}


 function stringsOnly(array) {
     let string = array.filter((item) => typeof item === "string");
     console.log(string);
     return string;
 }



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
       inputString = inputString.concat("1")
    document.getElementById("screen").innerHTML = `${inputString}`;
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

     inputString = inputString.concat("2");
    document.getElementById("screen").innerHTML = `${inputString}`;
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

     inputString = inputString.concat("3");
    document.getElementById("screen").innerHTML = `${inputString}`;
}

// click four 
function writeNumberFour(id) {
  
    inputString = inputString.concat("4");
    document.getElementById("screen").innerHTML = `${inputString}`;
}

function writeNumberFive(id) {
    inputString = inputString.concat("5");
    document.getElementById("screen").innerHTML = `${inputString}`;
}

function writeNumberSix(id) {
    inputString = inputString.concat("5");
    document.getElementById("screen").innerHTML = `${inputString}`;
}

function writeNumberSeven(id) {
    inputString = inputString.concat("5");
    document.getElementById("screen").innerHTML = `${inputString}`;
}

function writeANumber (number) {
    switch(number){
    case 1:
        inputString = inputString.concat("1");
        document.getElementById("screen").innerHTML = `${inputString}`;
        break;
    case 2: 
    }
    
}


// when press + 
function clickPlus (id) {

 const newString = checkExistingOperator(inputString, '+');
    console.log("this is return string ", newString);
    inputString = newString;
    document.getElementById("screen").innerHTML = `${inputString}`;

return 0;

}

// when press - 
function clickMinus (id) {

 const newString = checkExistingOperator(inputString, '-');
    console.log("this is return string ", newString);
    inputString = newString;
    document.getElementById("screen").innerHTML = `${inputString}`;

return 0;

}


// when press  ÷ 
function clickDivide (id) {

 const newString = checkExistingOperator(inputString, "÷");
    console.log("this is return string ", newString);
    inputString = newString;
    document.getElementById("screen").innerHTML = `${inputString}`;

return 0;

}


// muliplication
function clickMultiply(id) {
    const newString = checkExistingOperator(inputString, "x");
    console.log("this is return string ", newString);
    inputString = newString;
    document.getElementById("screen").innerHTML = `${inputString}`;

    return 0;
}


//percentage 
function clickPercentage (id) {
    const newString = checkExistingOperator(inputString, "% ");
    console.log("this is return string ", newString);
    inputString = newString;
    document.getElementById("screen").innerHTML = `${inputString}`;

    return 0;
}



// delete number from calculator 
function deleteArray(id) {
    var el = document.getElementById(id);
    /*  el.style.color = "blue"; */
    console.log("one");
    fistArray.length = 0;
     console.log(fistArray);
     const joinedfistArray = fistArray.join("");
     inputString = "";
    document.getElementById("screen").innerHTML = `${inputString}`;
}


// 


// when press add or minus or multiply
// check the string if it has one of the signs
// if there is, split the number in two string
// convert those strings into float 
// then based on the math sign perform a calculation
// then return the result 
// othewise return the value of entered value


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



// 