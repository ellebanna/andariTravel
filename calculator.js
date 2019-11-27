var equation = "";
var answersArr = [];
var numcheck = "";
var numbers = "";
var answer = 0;
var text="Total Expenses: ";
function display(arg){ // to show the input numbers and operators in the calculator
    equation += arg; 
    document.getElementById('screen').innerHTML =equation; //get the element by id (screen) and set it to equation containing the arg e.g >> "display('7')"
}
function clearall(){
    equation = ""; // input from the calculator and 
    answer = 0; // initialize answer to zero
    numbers = ""; // combined numbers from the input e.g "22+3" >>> "22", "+", "3"
    answersArr = []; // array of answers from the input, e.g "22+3" >>> ["22","+","3"]
    numcheck = ""; // every character from the input
    document.getElementById('screen').innerHTML = '0';
}

function equal(){
    /* Performs all the arithmetic operations*/
    for(var i = 0; i < equation.length; ++i){
        numcheck = equation.charAt(i);//charAt() method returns the character at the specified index in a string.
        if(['1','2','3','4','5','6','7','8','9','0','.'].includes(numcheck)){
            numbers += numcheck;
            if(i === equation.length-1){
                answersArr.push(numbers);//method adds new items to the end of an array, and returns the new length.
            }
        }else{
            answersArr.push(numbers);
            answersArr.push(numcheck);
            numbers = "";
        }
    }
    for(var i = 0; i < answersArr.length; ++i){
        if(answersArr[i]==='+'){
            answer = parseFloat(answersArr[i-1])+parseFloat(answersArr[i+1]); //parseFloat(answersArr[i-1]);returns the number as a number, not as a string.
            answersArr.splice(answersArr[i-2],3,answer.toString());
            document.getElementById('screen').innerHTML = answer.toString();//Convert a number to a string
            answer = 0;
            i=0;
        }else if (answersArr[i]==='-'){
            answer = parseFloat(answersArr[i-1])-parseFloat(answersArr[i+1]);
            answersArr.splice(answersArr[i-2],3,answer.toString()); // it adds item(answer) to index i-2 and removes the next 3 numbers e.g >> ["22","+","3"] ==== 25
            document.getElementById('screen').innerHTML = answer.toString();
            answer = 0;
            i=0;
        }else if (answersArr[i]==='*'){
            answer = parseFloat(answersArr[i-1])*parseFloat(answersArr[i+1]);
            answersArr.splice(answersArr[i-2],3,answer.toString());
            document.getElementById('screen').innerHTML =answer.toString();
            answer = 0;
            i=0;
        }else if (answersArr[i]==='/'){
            answer = parseFloat(answersArr[i-1])/parseFloat(answersArr[i+1]);
            answersArr.splice(answersArr[i-2],3,answer.toString());
            document.getElementById('screen').innerHTML = answer.toString();
            answer = 0;
            i=0;
        }   
    }
    /* Returns all the variables to the normal when equal is click*/
    equation = answersArr[0];
    numbers = ""; 
    numcheck = ""; 
    answer = 0;
    answersArr = [];
}