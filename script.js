console.log("Hello world")
let noBillShow = document.querySelector(".noBillShow")
let noPeopleShow = document.querySelector(".noPeopleShow")
let noOptionShow = document.querySelector(".noOptionShow")
let amount = document.querySelector(".billAmount");
let totalPeople = document.querySelector(".totalPeople");
let option = document.querySelector(".service");
let calculate = document.querySelector(".calculate");
let showHere = document.querySelector(".showOrNot");
let tipAmountShow = document.querySelector(".tip");
let totalAmountShow = document.querySelector(".total");
let owesAmount = document.querySelector(".owes");

calculate.addEventListener('click', (e)=>{
    let amValue=amount.value;
    let peopleC=totalPeople.value;
    let optionValue=option.value;
    console.log(amValue);
    console.log(peopleC);
    console.log(optionValue);

    if (amValue == '' || peopleC == '' || optionValue == 'Choose...') {
        if (amValue == '') {


            noBillShow.style.display = 'block'

            setTimeout(function () {
                noBillShow.style.display = 'none'

            }, 5000);
        }
        else {
            noBillShow.style.display = 'none'

        }
        if (peopleC == '') {
            noPeopleShow.style.display = 'block'

            setTimeout(function () {
                noPeopleShow.style.display = 'none'

            }, 5000);
        }
        else {
            noPeopleShow.style.display = 'none'

        }
        if (optionValue == 'Choose...') {
            noOptionShow.style.display = 'block'

            setTimeout(function () {
                noOptionShow.style.display = 'none'

            }, 5000);
        }
        else {
            noOptionShow.style.display = 'none'

        }
    }
  
    else{
        
        let tipA=Math.floor(amValue*(optionValue)/100);
        let totalBill = Math.floor(Number(amValue)+tipA);
        let each=totalBill/peopleC;
        
        tipAmountShow.innerHTML=tipA;
        totalAmountShow.innerHTML=totalBill;
        owesAmount.innerHTML=each;
        let animation = document.querySelector(".animationHide");
        animation.style.display = 'flex'
        showHere.style.display = 'none'

        setTimeout(() => {
            animation.style.display = 'none'
            showHere.style.display = 'none'

        }, 2000);
        setTimeout(() => {
            showHere.style.display = 'block'

        }, 2000);

        setTimeout(function () {
            amount.value='';
            totalPeople.value='';
            option.value='Choose...';
            showHere.style.display = 'none'

        }, 8000);
        console.log(totalBill)






    }
})

