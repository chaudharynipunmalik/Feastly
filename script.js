// ===== FEASTLY JAVASCRIPT =====

// getting elements from html
let searchBox = document.getElementById("search");
let boxes = document.getElementsByClassName("food-box");
let noResult = document.getElementById("no-result");
let vegBtn = document.getElementById("veg-btn");
let ratingBtn = document.getElementById("rating-btn");
let topBtn = document.getElementById("top-btn");

// filters are off at start
let vegOnly = false;
let highRating = false;


// this function checks every restaurant and hides the ones that dont match
function showRestaurants() {
    let text = searchBox.value.toLowerCase();
    let count = 0;

    for (let i = 0; i < boxes.length; i++) {
        let name = boxes[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        let cuisine = boxes[i].getElementsByClassName("cuisine")[0].innerText.toLowerCase();
        let veg = boxes[i].getAttribute("data-veg");
        let rating = parseFloat(boxes[i].getAttribute("data-rating"));

        let show = true;

        // check search text
        if (name.includes(text) == false && cuisine.includes(text) == false) {
            show = false;
        }

        // check pure veg filter
        if (vegOnly == true && veg == "no") {
            show = false;
        }

        // check rating filter
        if (highRating == true && rating < 4.2) {
            show = false;
        }

        if (show == true) {
            boxes[i].style.display = "block";
            count++;
        } else {
            boxes[i].style.display = "none";
        }
    }

    // show message if nothing found
    if (count == 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
}

// run search every time user types
searchBox.addEventListener("keyup", showRestaurants);


// pure veg button
function toggleVeg() {
    vegOnly = !vegOnly;
    vegBtn.classList.toggle("active");
    showRestaurants();
}

// rating 4.2+ button
function toggleRating() {
    highRating = !highRating;
    ratingBtn.classList.toggle("active");
    showRestaurants();
}

// clear all filters
function resetFilters() {
    vegOnly = false;
    highRating = false;
    searchBox.value = "";
    vegBtn.classList.remove("active");
    ratingBtn.classList.remove("active");
    showRestaurants();
}

// when user clicks on an inspiration item (pizza, burger etc)
function searchFood(food) {
    searchBox.value = food;
    showRestaurants();
    document.querySelector(".food").scrollIntoView({ behavior: "smooth" });
}


// login and sign up (just alerts for now)
function login() {
    let name = prompt("Enter your name:");
    if (name != null && name != "") {
        alert("Welcome back, " + name + "!");
    }
}

function signup() {
    let email = prompt("Enter your email to sign up:");
    if (email == null || email == "") {
        return;
    }
    if (email.includes("@") && email.includes(".")) {
        alert("Account created for " + email);
    } else {
        alert("Please enter a valid email");
    }
}


// back to top button shows after scrolling down
window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}