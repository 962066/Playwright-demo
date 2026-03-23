/*Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a
palindrome, then test your function with various strings and print the results.*/

function reverseString(str){
    let character=str.split("");
    let reverse="";
    for(let i=character.length-1;i>=0;i--){
        reverse+=character[i];   
    }
    console.log("Reversed String:",reverse);
    return reverse;
}
reverseString("samosa");

function palindrome(str){
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    if(str===reversed){
        console.log("The given string is a palindrome");
    }
    else{
        console.log("The given string is not a palindrome");
    }
    }
palindrome("hello");