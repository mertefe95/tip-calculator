//Calculate Tip
function calculateTip() {
    var billAmount = document.getElementById("bill-amount").value;
    var serviceRate = document.getElementById("service-rate").value;
    var peopleNumber = document.getElementById("people-number").value;

    // Check and Validate input for Bill Amount and Service Rate
    if (billAmount === "" || serviceRate == 0) {
        alert("Please enter missing boxes");
        return;

        }

    //Check to see if this input is empty or less than or equal to 1
    if (peopleNumber === "" || peopleNumber <= 1) {
        peopleNumber = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    var total = (billAmount * serviceRate) / peopleNumber;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

    }

  //Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

  //click to call function
document.getElementById("calculate-btn").onclick = function() {
    calculateTip();
};