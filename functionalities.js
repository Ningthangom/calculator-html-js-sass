
let inputString = "";
let calOn = false;
 function toggle() {
     calOn = calOn ? false : true;
       console.log("Toggled bool is", calOn);
           
   if (calOn == false) {
         document.getElementById("onOff").innerHTML = `Off`;
         const btn = document.getElementsByClassName("number");
         btn.setAttribute("disabled", "");
   } else {
       /* document.getElementsByClassName("number").disabled = false; */
        document.getElementById("onOff").innerHTML = `On`;
        const btn = document.getElementsByClassName("number");
        btn.removeAttribute("disabled");
   }
 }


// get the operators 
const inputOperator = document.querySelectorAll(".operator");

inputOperator.forEach((button) => {
    button.addEventListener("click", () => getOperators(button.value));
});

function getOperators(operator) {
    /*  inputString = inputString.concat(operator); */
    if (operator == "c") {
        console.log("delete button is called: ")
        inputString = "";
        document.getElementById("screen").innerHTML = `${inputString}`;
    } else if(operator == "="){

        if(inputString[0] == '-'){
             let stringNoMinus = inputString.substring(1);
             
                 const values = stringNoMinus.split(/[+\-\*\/\÷\x\%]/);
                 console.log("checking negative value", values);
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
                     //adding negative value back since it was removed
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
                 inputString = string;
                 document.getElementById("screen").innerHTML = `${inputString}`;
        } else {
             const values = inputString.split(/[+\-\*\/\÷\x\%]/);
             // to do: need to figure out how to handle negative value
            
             //get the operator
             const operators = inputString.charAt(
                 inputString.search(/[+\-\*\/\÷\x\%]/),
             );

             //call calculation function to do math operation on the first two
             const calResult = calculation(
                 //adding negative value back since it was removed
                 parseFloat(`${values[0]}`),
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
             inputString = string;
             document.getElementById("screen").innerHTML = `${inputString}`;
        }
          
    }else {
        inputString = checkExistingOperator(inputString, operator);
        document.getElementById("screen").innerHTML = `${inputString}`;
    }
}


// get numbers
const inputNumber = document.querySelectorAll(".number");
function getValues(input) {
    if(input =='.'){
        console.log("entered decimal")
        if(inputString.charAt(inputString.search(/[+\-\*\/\÷\x\%]/))) {
            const values = inputString.split(/[+\-\*\/\÷\x\%]/)
            if(values[1].charAt(values[1].search(/[.]/))){

                document.getElementById("screen").innerHTML = `${inputString}`;
            }else{
                inputString = inputString.concat(input)
                document.getElementById("screen").innerHTML = `${inputString}`;
            }
        }else{
            if(inputString.charAt(inputString.search(/[.]/))){
                document.getElementById("screen").innerHTML = `${inputString}`;
            }else{
                inputString = inputString.concat(input)
                document.getElementById("screen").innerHTML = `${inputString}`;
            }
        }
    } else{
    inputString = inputString.concat(input);
    console.log(inputString);
    document.getElementById("screen").innerHTML = `${inputString}`;
    }
   
}

inputNumber.forEach((button) => {
    button.addEventListener("click", () => getValues(button.value));
});


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
        return (firstNumber) * secondNumber;
    }
}


// checking if a math operator exist
function checkExistingOperator (string,enteredOperator){
    console.log("this is the first index of the string: ", typeof string[0], string[0])
    if (string[0] ==='-'){
        console.log("this is the whole string before removing minus: ", string);
  
        let stringNoMinus = string.substring(1);
        console.log("this is String without minus: ", stringNoMinus)

        // Array to s
         if (stringNoMinus.charAt(stringNoMinus.search(/[+\-\*\/\÷\x\%]/))) {
             //split the string values
             const values = stringNoMinus.split(/[+\-\*\/\÷\x\%]/);
             console.log("checking negative value", values);
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
                 //adding negative value back since it was removed
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
    } else  {
         if (string.charAt(string.search(/[+\-\*\/\÷\x\%]/))) {
             //split the string values
             const values = string.split(/[+\-\*\/\÷\x\%]/);
             console.log("checking negative value", values);
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



// if clicked demical 
// check the operator 
    //=> if operator doesn't exit () {
        // check for the decimal
            // if decimal doesn't exist  => concat the decimal 
            // if it exist => don't concat decimal to the string
    // if operator exist => split the string 
        // => check the second value has decimal 
        //     => if exit => don't concat (just return the previous string)
        //     => if not => concat the decimal 
        // 
    
// check if there is a decimal in the number 



