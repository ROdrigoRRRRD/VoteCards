let numberContainer = document.querySelector(".rating-state__number-container");
let numberRate = document.querySelector('.thankyou-state__result--number');
let submit = document.querySelector('.rating-state__button');
let ratingState = document.querySelector('.rating-state');
let thankyouState = document.querySelector('.thankyou-state');

numberContainer.addEventListener('click', evento => {
    let selectNumber = evento.target.innerText;
    numberRate.innerText = selectNumber;
    if (selectNumber >= 1 || selectNumber <= 5) {
        submit.addEventListener('click', () => {
            ratingState.style.display = 'none';
            thankyouState.style.display = 'flex';
        })
    }
});