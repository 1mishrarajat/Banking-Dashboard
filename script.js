document.addEventListener("DOMContentLoaded", function () {
    const balanceElement = document.getElementById("balance");
    const depositBtn = document.getElementById("depositBtn");
    const withdrawBtn = document.getElementById("withdrawBtn");

    let currentBalance = 1000;

    function updateBalance() {
        balanceElement.textContent = `$${currentBalance.toFixed(2)}`;
    }

    depositBtn.addEventListener("click", function () {
        const depositAmount = parseFloat(document.getElementById("depositAmount").value);
        if (depositAmount > 0) {
            currentBalance += depositAmount;
            updateBalance();
            document.getElementById("depositAmount").value = '';
        }
    });

    withdrawBtn.addEventListener("click", function () {
        const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
        if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
            currentBalance -= withdrawAmount;
            updateBalance();
            document.getElementById("withdrawAmount").value = '';
        } else if (withdrawAmount > currentBalance) {
            alert("Insufficient balance for this withdrawal.");
        }
    });

    // Initial balance display
    updateBalance();
});



