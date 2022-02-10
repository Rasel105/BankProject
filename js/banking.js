document
    .getElementById("deposit-button")
    .addEventListener("click", function() {
        // finding deposit input value
        const depositText = document.getElementById("diposit-input");
        const depositValueText = depositText.value;
        const depositValueAmount = parseFloat(depositValueText);

        // finding deposit innerText

        const depositTotal = document.getElementById("deposit-total");
        const previousDepositText = depositTotal.innerText;
        const previousDepositAmount = parseFloat(previousDepositText);
        const newDepitTotal = previousDepositAmount + depositValueAmount;
        depositTotal.innerText = newDepitTotal;

        // update amount balance
        const balance = document.getElementById("balance-total");
        const balanceTotalText = balance.innerText;
        const balanceTotalAmount = parseFloat(balanceTotalText);
        const newBalaceTotal = balanceTotalAmount + depositValueAmount;

        balance.innerText = newBalaceTotal;

        depositText.value = "";
    });

document
    .getElementById("withdraw-button")
    .addEventListener("click", function() {
        // finding withdraw input box
        const widthdrawInput = document.getElementById("withdraw-input");
        const widthdrawInputText = widthdrawInput.value;
        const widthdrawInputAmount = parseFloat(widthdrawInputText);

        // finding the withdraw box

        const withdrawBox = document.getElementById("withdraw-total");
        const withdrawBoxText = withdrawBox.innerText;
        const withdrawBoxAmount = parseFloat(withdrawBoxText);
        const newWithdrawAmount = widthdrawInputAmount + withdrawBoxAmount;
        withdrawBox.innerText = newWithdrawAmount;

        // update balanceTotal
        const balanceTotal = document.getElementById("balance-total");
        const previousBalaceText = balanceTotal.innerText;
        const previousBalaceAmount = parseFloat(previousBalaceText);
        const newBalaceAmout = previousBalaceAmount - widthdrawInputAmount;
        balanceTotal.innerText = newBalaceAmout;
        widthdrawInput.value = "";
    });