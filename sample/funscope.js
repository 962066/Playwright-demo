//Scoping
funscope()
function funscope(){
    console.log("value as soon as function declared",a)
if (true){
    var a=70
    console.log("value of a inside the if block",a)
}
console.log("value of a outside the if block and inside function block",a)
}
