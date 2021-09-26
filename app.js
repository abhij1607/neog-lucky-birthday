const dobInput = document.querySelector('#dob-input');
const luckyNumInput = document.querySelector('#luckynum-input');
const btnCheck = document.querySelector('#btn-check');
const errorDiv = document.querySelector('.error-handler');
const outputDiv = document.querySelector('.output');

btnCheck.addEventListener('click',submit);

// dobInput.addEventListener('keyup', a);
function submit(){
    clearOutput();
    var dateofbirth = dobInput.value;
    var dateString = dateofbirth.replaceAll("-","");
    var luckyNumber = luckyNumInput.value;
    let sum = 0;
    for (let i=0;i<dateString.length;i++){
        sum = sum + Number(dateString[i]);
        console.log(sum);
    }
    checkLuck(sum,luckyNumber);
}

function checkLuck(dateSum,luckyNumber){
    if(dateSum%luckyNumber===0){
        showOutput("Yay! Your birthday is lucky");
    } else{
        showOutput("Oops your birthday is not lucky");
    }
}

function showError(error) {
    errorDiv.innerHTML = error;
}

function removeError(){
    errorDiv.innerHTML="";
}

function showOutput(msg){
    outputDiv.innerHTML = msg;
}

function clearOutput(){
    outputDiv.innerHTML = "";
}

// var dateString = dobInput.replaceAll("-","");
// console.log(dateString);