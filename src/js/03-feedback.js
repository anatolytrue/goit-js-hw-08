// import throttle from "lodash.throttle";


// const form = document.querySelector('.feedback-form');

// let formObject = {};
// //let formObject = localStorage.getItem(LOCALSTORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)):{};;

// const LOCALSTORAGE_KEY = "feedback-form-state";

// form.addEventListener('input', throttle (inputHandler, 500));
// form.addEventListener('submit', submitHandler);

// updateInput();

// function inputHandler(e) {
//     e.preventDefault();

//     formObject[e.target.name] = e.target.value;
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formObject))
// }

// function submitHandler(e) {
//     e.preventDefault();
 
//     const { elements: { email, message } } = e.currentTarget;
//     const formData = { email: email.value, message: message.value };
//     if (email.value || message.value === null) {
//         return alert('Please fill in all the fields!')
//     }
//     console.log(formData);
//     localStorage.removeItem(LOCALSTORAGE_KEY);
//     e.currentTarget.reset()
// }

// function updateInput() {
//     const formInput = localStorage.getItem(LOCALSTORAGE_KEY);
//     const parseFormInput = JSON.parse(formInput);
//         if (parseFormInput) {
//         form.elements.email.value = parseFormInput.email || '';
//         form.elements.message.value = parseFormInput.message || '';
//     }

    // let parseInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    // console.log(parseInput)
    // if (parseInput) {
    //     form.elements.email.value = parseInput.email || '';
    //     form.elements.message.value = parseInput.message || '';
    // }
// }


import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
// let formObject = {};
const LOCALSTORAGE_KEY = "feedback-form-state";
let formObject = localStorage.getItem(LOCALSTORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)):{};
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
    const { elements: { email, message } } = e.currentTarget;
    const formData = { email: email.value, message: message.value };
    if (email.value === null|| message.value === null) {
        return alert('Please fill in all the fields!')
    }
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    e.currentTarget.reset()
}
function updateInput() {
    const formInput = localStorage.getItem(LOCALSTORAGE_KEY);
    const parseFormInput = JSON.parse(formInput);
    if (parseFormInput) {
        form.elements.email.value = parseFormInput.email || '';
        form.elements.message.value = parseFormInput.message || '';
    }
}
    // let parseInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    // console.log(parseInput)
    // if (parseInput) {
    //     form.elements.email.value = parseInput.email || '';
    //     form.elements.message.value = parseInput.message || '';
    // }
