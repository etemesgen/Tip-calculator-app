let fivePercent = document.getElementById("five-percent");
let tenPercent = document.getElementById("ten-percent");
let fifteenPercent = document.getElementById("fifteen-percent");
let twentyFivePercent = document.getElementById("twenty-five-percent");
let fiftyPercent = document.getElementById("fifty-percent");
let customPercent = document.getElementById("custom");
let tipAmount =  document.getElementById("tip-amount-num");
let totalAmount =  document.getElementById("total-amount");
let error = document.getElementById("error");

function getBill() {
    let tip = 0;
    billAmount = document.querySelector('input').value;
    console.log(billAmount);

    if(billAmount){
        calculateTipFivePercent();
        calculateTipTenPercent();
        calculateTipFifteenPercent();
        calculateTipTwentyFivePercent();
        calculateTipFiftyPercent();
        calculateTipCustomPercent();
        total();
    }


    function calculateTipFivePercent(){
        fivePercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = "$" + billAmount / 5;
        })
    }
    //calculateTipFivePercent();

    function calculateTipTenPercent(){
        tenPercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = "$" + billAmount / 10;
        })  
    }
    //calculateTipTenPercent();

    function calculateTipFifteenPercent(){
        fifteenPercent.addEventListener("click", () => {
            tipAmount.innerHTML = "$" + billAmount / 15;
        })
    }
    //calculateTipFifteenPercent();

    function calculateTipTwentyFivePercent(){
        twentyFivePercent.addEventListener("click", () => {
            tipAmount.innerHTML = "$" + billAmount / 25;
        })
    }
    //calculateTipTwentyFivePercent();

    function calculateTipFiftyPercent(){
        fiftyPercent.addEventListener("click", () => {
            tipAmount.innerHTML = "$" + billAmount / 50;
        })
    }
    //calculateTipFiftyPercent();

    function calculateTipCustomPercent(){
        customPercent.addEventListener("click", () => {
            tipAmount.innerHTML = "$" + billAmount / document.querySelector("custom").value;
        })
    }
    //calculateTipCustomPercent();

    function total(){
        totalAmount.innerHTML = "$" + billAmount + tip;
    }
    //total();
}

/*

function getPeople(){
    numberPeople = document.querySelector('input').value;
    console.log(numberPeople);

    if(numberPeople == 0){
        error.innerHTML = "Can't be zero";
        document.getElementById("number-people-amount").style.border = ".15rem solid rgb(221, 52, 52)";
    }
}
*/