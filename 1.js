
const popupMenu = document.querySelector('.popup-menu');
const menuItems = popupMenu.querySelector('.menu-items');


let timer;

popupMenu.addEventListener('mouseenter', function () {
  clearTimeout(timer);
  menuItems.style.opacity = '1';
  menuItems.style.top = '130%';
  menuItems.style.pointerEvents = 'auto';

});

popupMenu.addEventListener('mouseleave', function () {
  clearTimeout(timer);
  timer = setTimeout(() => {
    menuItems.style.opacity = '0';
    menuItems.style.top = 'calc(100% + 5px)';
    menuItems.style.pointerEvents = 'none';
  }, 300);
});

const popupMenu1 = document.querySelector('.popup-menu1');
const menuItems1 = popupMenu1.querySelector('.menu-items1');


let timera;

popupMenu1.addEventListener('mouseenter', function () {
  clearTimeout(timera);
  menuItems1.style.opacity = '1';
  menuItems1.style.top = '130%';
  menuItems1.style.pointerEvents = 'auto';

});

popupMenu1.addEventListener('mouseleave', function () {
  clearTimeout(timer);
  timera = setTimeout(() => {
    menuItems1.style.opacity = '0';
    menuItems1.style.top = 'calc(100% + 5px)';
    menuItems1.style.pointerEvents = 'none';
  }, 300);
});




///error handeling

document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default form submission and page reload
    validateForm();
  });

document
  .getElementById("registerButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default form submission and page reload
    validate();
  });

function validateForm() {
  let a = document.forms["myform"]["Email"].value;
  let b = document.forms["myform"]["Password"].value;
  if (a == "") {
    // alert("Enter your Email");
    showErrorMessage("Error: Enter your Email");
    // return false;
  } else if (!/\S+@\S+\.\S+/.test(a)) {
    // alert("Please Enter a valid Email ID");
    showErrorMessage("Error: Please Enter a valid Email ID");
    // return false;
  } else if (b == "") {
    // alert("Enter Your Password");
    showErrorMessage("Error: Enter Your Password");
    // return false;
  }
  else {
    window.location.reload();
  }
}

function validate() {
  let c = document.forms["f1"]["Email"].value;
  let d = document.forms["f1"]["Password"].value;
  let e = document.forms["f1"]["ConfirmPassword"].value;
  if (c == "") {
    // alert("Enter your Email");
    showErrorMessage("Error: Enter your Email");
    // return false;
  } else if (!/\S+@\S+\.\S+/.test(c)) {
    // alert("Please Enter a valid Email ID");
    showErrorMessage("Error: Please Enter a valid Email ID");
    // return false;
  } else if (d == "") {
    // alert("Enter Your Password");
    showErrorMessage("Error: Enter Your Password");
    // return false;
  } else if (d.length < 8) {
    console.log(d);
    // alert("Password must 8 character long");
    showErrorMessage("Error: Password must 8 character long");
    // return false;
  } else if (d != e) {
    console.log(e);
    // alert("Enter same Password");
    showErrorMessage("Error: Enter same Password");
    // return false;
  }
  else {
    window.location.reload();
  }
}

function showErrorMessage(ShowMessage) {
  const message = document.querySelector(".message");
  const errorContainer = document.querySelector(".error-container");

  console.log("showing error message: ", ShowMessage);

  if (message.innerHTML !== "") {
    message.innerHTML = "";
  }
  errorContainer.style.display = "flex";
  message.innerHTML = ShowMessage;
}


