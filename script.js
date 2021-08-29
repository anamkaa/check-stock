var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var checkValue = document.querySelector("#check-value");
var outputBox = document.querySelector("#output-box");

checkValue.addEventListener('click', showProfitAndLoss);

function showProfitAndLoss(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial,quantity,current){
    if(initial,quantity,current){
       if(initial>current){
        outputBox.style.color = 'red';
           var loss = ((initial-current) * quantity ).toFixed(2);
           var lossPercentage =( (loss/initial) * 100).toFixed(2) ;
           showMessage(`The loss is ${loss} and loss percentage is ${lossPercentage}%`);
       }

       else if (current>initial){
        outputBox.style.color = 'lightGreen';
           var  profit = ((current-initial) * quantity).toFixed(2) ;
           var profitPercentage = ((profit/initial) * 100).toFixed(2);
           showMessage(`The profit is ${profit} and profit percentage is ${profitPercentage}%`);
       }

       else{
         showMessage(`No pain no gain and no gain no pain.`);
       }
    }

    else{
        showMessage("Please fill all the fields.");
    }
}

function showMessage(message){
    outputBox.innerHTML = message;
}