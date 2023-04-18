let brand = document.querySelector(".card-top");
let formNumber = document.querySelector("#cc-number");
let formHolder = document.querySelector("#cc-holder");
let formValidity = document.querySelector("#cc-validity");
let formCvv = document.querySelector("#cc-cvv");
let input = document.querySelectorAll("input");
let form = document.querySelector("form");
let button = document.querySelector("button");

formNumber.addEventListener("keyup", (e) => {
    let cardNumber = document.querySelector("#card-number");

    var inputValue = e.target.value;
    let maxLength = 19;
    if (formNumber.value.length > maxLength) {
        formNumber.value = inputValue.slice(0, maxLength);
    }
    cardNumber.innerHTML = formNumber.value;

    if (
        cardNumber.textContent.charAt(0) >= "4" &&
        cardNumber.textContent.charAt(0) <= "6"
    ) {
        brand.firstElementChild.setAttribute("src", "assets/visa.svg");
        brand.firstElementChild.setAttribute(
            "alt",
            "Ícone de cartão da marca Visa",
        );
    } else if (
        cardNumber.textContent.charAt(0) >= "7" &&
        cardNumber.textContent.charAt(0) <= "9"
    ) {
        brand.firstElementChild.setAttribute("src", "assets/mastercard.svg");
        brand.firstElementChild.setAttribute(
            "alt",
            "Ícone de cartão da marca MasterCard",
        );
    } else {
        brand.firstElementChild.setAttribute("src", "assets/elo.svg");
        brand.firstElementChild.setAttribute(
            "alt",
            "Ícone de cartão da marca Elo",
        );
    }

    if (cardNumber.textContent.length == 0) {
        cardNumber.textContent = "0000 0000 0000 0000";
    }
});

formHolder.addEventListener("keyup", (e) => {
    let cardName = document.querySelector("#card-name");
    let inputValue = e.target.value;
    let maxLength = 22;
    if (formHolder.value.length > maxLength) {
        formHolder.value = inputValue.slice(0, maxLength);
    }

    cardName.innerHTML = formHolder.value;

    if (cardName.textContent.length == 0) {
        cardName.textContent = "Seu nome aqui";
    }
});

formValidity.addEventListener("keyup", (e) => {
    let cardValidity = document.querySelector("#card-date");
    let inputValue = e.target.value;
    let maxLength = 5;
    if (formValidity.value.length > maxLength) {
        formValidity.value = inputValue.slice(0, maxLength);
    }
    cardValidity.innerHTML = formValidity.value;

    if (cardValidity.textContent.length == 0) {
        cardValidity.textContent = "00 / 00";
    }
});

formCvv.addEventListener("keyup", (e) => {
    let cardCvv = document.querySelector("#card-cvv");
    let inputValue = e.target.value;
    let maxLength = 4;
    if (formCvv.value.length > maxLength) {
        formCvv.value = inputValue.slice(0, maxLength);
    }
    cardCvv.innerHTML = formCvv.value;

    if (cardCvv.textContent.length == 0) {
        cardCvv.textContent = "000";
    }
});
function flip() {
    let cardFront = document.querySelector(".front");
    let cardBack = document.querySelector(".back");

    cardFront.classList.toggle("toggleFlipe");
    cardBack.classList.toggle("toggleFlipe");
}

form.addEventListener("change", function validate() {
    if (
        formNumber.value.length === 19 &&
        formHolder.value.length >= 7 &&
        formValidity.value.length === 5 &&
        formCvv.value.length >= 3
    ) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

button.addEventListener("click", function () {
    const load = new Image(24, 24);
    load.src = "assets/spinnerGap.svg";
    load.alt = "Símbolo de carregamento";
    let aux = button.firstChild;
    button.firstChild.replaceWith(load);

    button.firstChild.classList.add("loading");

    setTimeout(() => {
        button.classList.remove("loading");
        button.firstChild.replaceWith(aux);
    }, 3000);
});
