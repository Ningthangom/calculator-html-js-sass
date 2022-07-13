
import {checkExistingOperator} from './checkOperator.js';
import { calculation } from "./calculation.js";

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

const getOperators = (operator) => {
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
                 const string = values.join();
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
            const string = values.join();
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
const  getValues = (input) => {
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
