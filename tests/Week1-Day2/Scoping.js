/*Write a JavaScript program to observe how the same variable name behaves:
* in *global scope*,
* inside a *function*, and
* inside an *if-block* using both var and let.*/

let genderType = "female";
function printGender(){
    let color = "brown";
    if(genderType.startsWith("female")){
        var age=30;
        let color="pink";
        console.log("The color is",color);
    }
    console.log("The age is",age);
}
printGender();
console.log(genderType);

genderType="male";
printGender();
console.log(genderType);    