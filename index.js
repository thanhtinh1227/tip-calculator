const billInput = document.querySelector("input[name='bill']");
const numberPeopleInput = document.querySelector("input[name='people']");
const tipSelect = document.querySelectorAll(".mini-grid-container > div");
const output = document.querySelector(".output");
let bill, tip, numberOfPeople;

billInput.onchange = (e) => {
    bill = e.target.value;
    console.log(bill)
}

numberPeopleInput.onchange = (e) => {
    numberOfPeople = e.target.value;
    if(numberOfPeople === "0") {
        document.querySelector(".not-zero").classList.add("invalid")
    } else {
        document.querySelector(".not-zero").classList.remove("invalid")        
    }
}

tipSelect.forEach (input => {
    input.onclick = () => {
        switch (input.innerText) {
            case "5%":
                tip = 0.05;
                break;
            case "10%":
                tip=0.10;
                break;
            case "15%":
                tip = 0.15;
                break;
            case "25%":
                tip = 0.25;
                break;
            case "50%":
                tip = 0.5;
        }
        const prevChosenTip = document.querySelector(".chosen");
            if(prevChosenTip) {
                prevChosenTip.classList.remove("chosen");
            }
        input.classList.add("chosen");
        console.log(tip)
    }
})

const customTipInput = document.querySelector("input[name='custom-tip']")
customTipInput.onchange = (e) => {
    tip = Number(e.target.value)/100;
    const prevChosenTip = document.querySelector(".chosen");
    if(prevChosenTip) {
        prevChosenTip.classList.remove("chosen");
    }
}

const tipPerPerson = document.querySelector(".tip-per-person");
const totalPerPerson = document.querySelector(".total-per-person");
const btn = document.querySelector(".btn");

document.onchange = () => {
    if(bill && tip && numberOfPeople && numberOfPeople != "0") {
        const totalTip = (((Number(bill)*Number(tip)/Number(numberOfPeople))*100)/100).toFixed(2);
    const total = ((((Number(bill)* (1+Number(tip)))/Number(numberOfPeople))*100)/100).toFixed(2);
        tipPerPerson.innerText = `$${totalTip}`;
        totalPerPerson.innerText = `$${total}`;
        btn.classList.remove("disable");
}};

btn.onclick = () => {
    location.reload();
}