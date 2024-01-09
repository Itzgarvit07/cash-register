function calculateChange() {
    var billAmount = parseFloat(document.getElementById("input1").value);
    var cashAmount = parseFloat(document.getElementById("input2").value);

    if (isNaN(billAmount) || isNaN(cashAmount) || billAmount <= 0 || cashAmount < billAmount) {
        alert("Please enter valid amounts.");
        return;
    }

    var changeAmount = cashAmount - billAmount;

    var note500 = 0;
    var note100 = 0;
    var note50 = 0;
    var note20 = 0;
    var note10 = 0;
    var note5 = 0;
    var note1 = 0;

    if (changeAmount >= 500) {
        note500 = Math.floor(changeAmount / 500);
        changeAmount = changeAmount % 500;
    }

    if (changeAmount >= 100) {
        note100 = Math.floor(changeAmount / 100);
        changeAmount = changeAmount % 100;
    }

    if (changeAmount >= 50) {
        note50 = Math.floor(changeAmount / 50);
        changeAmount = changeAmount % 50;
    }

    if (changeAmount >= 20) {
        note20 = Math.floor(changeAmount / 20);
        changeAmount = changeAmount % 20;
    }

    if (changeAmount >= 10) {
        note10 = Math.floor(changeAmount / 10);
        changeAmount = changeAmount % 10;
    }

    if (changeAmount >= 5) {
        note5 = Math.floor(changeAmount / 5);
        changeAmount = changeAmount % 5;
    }

    if (changeAmount >= 1) {
        note1 = Math.floor(changeAmount);
    }

    document.getElementById("value1").innerText = note500;
    document.getElementById("value2").innerText = note100;
    document.getElementById("value3").innerText = note50;
    document.getElementById("value4").innerText = note20;
    document.getElementById("value5").innerText = note10;
    document.getElementById("value6").innerText = note5;
    document.getElementById("value7").innerText = note1;
}