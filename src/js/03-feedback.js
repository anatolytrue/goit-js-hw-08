import { update } from "lodash";
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const formObject = { };

form.addEventListener('input', throttle (inputHandler, 500));
form.addEventListener('submit', submitHandler);

updateInput();

function inputHandler(e) {
    e.preventDefault();
    const { email, message } = e.target;
    const formData = { email: email.value, message: message.value };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function submitHandler(e) {
    e.preventDefault();
    const { elements: { email, message } } = e.target;
    const formData = { email: email.value, message: message.value };
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    form.reset()
}

function updateInput () {
    if (localStorage.getItem("feedback-form-state") === null) {
        return
    }
    const parseInput = JSON.parse(localStorage.getItem("feedback-form-state"));
    form.elements.email.value = parseInput.email;
    form.elements.message.value - parseInput.message;
}
