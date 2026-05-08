// SOLDE

const toggleBtn = document.getElementById("toggle-balance");
const balanceText = document.getElementById("balance-text");

let visible = true;

toggleBtn.addEventListener("click", () => {

  if(visible){

    balanceText.innerHTML = "••••••";
    toggleBtn.innerHTML = "🙈";
    visible = false;

  }else{

    balanceText.innerHTML = "0 BCC";
    toggleBtn.innerHTML = "👁";
    visible = true;

  }

});


// POPUP

const popup = document.getElementById("popup");

function showPopup(){

  popup.classList.add("show");

  setTimeout(() => {

    popup.classList.remove("show");

  }, 2000);

}

const popupButtons = document.querySelectorAll(".popup-btn");

popupButtons.forEach(button => {

  button.addEventListener("click", () => {

    showPopup();

  });

});


// NAVIGATION

const navButtons = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

navButtons.forEach(button => {

  button.addEventListener("click", () => {

    navButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const pageId = button.getAttribute("data-page");

    pages.forEach(page => {
      page.classList.remove("active-page");
    });

    document.getElementById(pageId).classList.add("active-page");

  });

});


// DARK MODE

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    themeToggle.innerHTML = "☀️";

  }else{

    themeToggle.innerHTML = "🌙";

  }

});
