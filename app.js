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
    //    totalFivePercent();
    }


    function calculateTipFivePercent(){
        fivePercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount / 5).toFixed(1));
            totalAmount.innerHTML = +billAmount + tip;
        })
    }
    //calculateTipFivePercent();

    function calculateTipTenPercent(){
        tenPercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount / 10).toFixed(1));
            totalAmount.innerHTML = +billAmount + tip;
        })  
    }
    //calculateTipTenPercent();

    function calculateTipFifteenPercent(){
        fifteenPercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount / 15).toFixed(1));
            totalAmount.innerHTML = +billAmount + tip;
        })
    }
    //calculateTipFifteenPercent();

    function calculateTipTwentyFivePercent(){
        twentyFivePercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount / 25).toFixed(1));
            totalAmount.innerHTML = +billAmount + tip;
        })
    }
    //calculateTipTwentyFivePercent();

    function calculateTipFiftyPercent(){
        fiftyPercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount / 50).toFixed(1));
            totalAmount.innerHTML = +billAmount + tip;
        })
    }
    //calculateTipFiftyPercent();

    function calculateTipCustomPercent(){
        customPercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount / document.querySelector("custom").value).toFixed(1));
            totalAmount.innerHTML = +billAmount + tip;
        })
    }
    //calculateTipCustomPercent();

  /*  function totalFivePercent(){
        totalAmount.innerHTML = "$" + billAmount + tip;
    }*/
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