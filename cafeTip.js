function calculateBill() {
    let initialPrice = parseFloat(document.querySelector("#initialPrice").value);
    let radioBtn = parseFloat(document.querySelector('input[name="tip"]:checked').value);
    let pplNumber = parseInt(document.querySelector("#nrOfPeople").value);


    let tip = initialPrice * radioBtn;
    let totalPerPerson = (initialPrice + tip) / pplNumber;
    let tipPerPerson = tip / pplNumber;
    let total = initialPrice + tip;

    document.querySelector("#tipPerson").textContent = tipPerPerson.toFixed(2);
    document.querySelector("#totalPerson").textContent = totalPerPerson.toFixed(2);
    document.querySelector("#totalAmount").textContent = total.toFixed(2);

}
document.querySelector("#calculateBtn").addEventListener("click", calculateBill);


function resetPage() {
    document.querySelector("#initialPrice").value = " ";
    document.querySelector("#nrOfPeople").value = "1";
    document.querySelector("#tipPerson").textContent = "0";
    document.querySelector("#totalPerson").textContent = "0";
    document.querySelector("#totalAmount").textContent = "0";
    document.querySelector('input#tip30').checked = true;
}

document.querySelector("#resetBtn").addEventListener("click", resetPage);
