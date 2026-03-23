/*Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type.*/

function checkNumberType(num) {
    if (num>0) {
        console.log("The given number is Positive");
    }
    else if (num<0){
        console.log("The given number is Negative");
    }
    else{
        console.log("The given number is Zero");
    }
}
checkNumberType(-5);
