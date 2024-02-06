const subscribe_container = document.getElementsByClassName(
  "subscribe_container"
)[0];
const emailElement = document.getElementById("email");
const btn_subs = document.getElementById("btn_subs");
const error_message = document.getElementsByClassName("error")[0];
const success_container =
  document.getElementsByClassName("success_container")[0];
const entered_email = document.getElementById("entered_email");
const btn_success = document.getElementsByClassName("btn_success")[0];

let entered_email_id = "";
let valid = false;

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validateEmail = (email) => {
  return String(email).toLowerCase().match(EMAIL_REGEX);
};

btn_subs.addEventListener("click", function (e) {
  e.preventDefault();
  if (entered_email_id) {
    entered_email.innerHTML = entered_email_id;
    subscribe_container.setAttribute("hide", true);
    success_container.removeAttribute("hide");
  }
});

emailElement.addEventListener("keyup", function (e) {
  valid = validateEmail(e.target.value);
  if (valid) {
    error_message.innerHTML = "";
    btn_subs.style["backgroundColor"] = "hsl(4, 100%, 67%)";
    entered_email_id = e.target.value;
  } else {
    error_message.innerHTML = "Valid email required";
    btn_subs.style["backgroundColor"] = "hsl(234, 29%, 20%)";
  }
});

btn_success.addEventListener("click", function (e) {
  e.preventDefault();
  subscribe_container.removeAttribute("hide");
  success_container.setAttribute("hide", true);
  entered_email_id = "";
  emailElement.value = "";
});
