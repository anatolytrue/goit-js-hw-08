import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');


let formObject = {};
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle (inputHandler, 500));
form.addEventListener('submit', submitHandler);

updateInput();

function inputHandler(e) {
    e.preventDefault();

    formObject[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formObject))
}

function submitHandler(e) {
    e.preventDefault();
 
    // const { elements: { email, message } } = e.currentTarget;
    // const formData = { email: email.value, message: message.value };
    formObject[e.target.name] = e.target.value;
    if (e.target.value === '') {
        return alert('Please fill in all the fields WTF!')
    }
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    e.currentTarget.reset()
}

function updateInput() {
    let parseInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (parseInput.value === null) {
        form.elements.email.value = formObject;
    } else {
        form.elements.email.value = parseInput.email;
        form.elements.message.value = parseInput.message;
    }
}
// function inputHandler(e) {
//     formObject.email = e.currentTarget.email.value;
//     formObject.message = e.currentTarget.message.value;
//     localStorage.setItem(LOCALSTOREGE_KEY, JSON.stringify(formObject));
// }

// function submitHandler(e) {
//     e.preventDefault();
//     formObject.email = e.target.email.value;
//     formObject.message = e.target.message.value;
//     console.log(formObject);

//     localStorage.removeItem(LOCALSTOREGE_KEY);
//     form.reset();
// }

// function updateInput() {
//     const formParse = JSON.parse(localStorage.getItem("LOCALSTORAGE_KEY"));
//     if (formParse.email) {
//         form.elements.email.value = formParse.email
//     }
//     if (formParse.message) {
//         form.elements.message.value = formParse.message
//     }

// }

