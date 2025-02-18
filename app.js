import reviewData from "./reviews.js";


// Selecting elements
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting item
let currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});

// Event listeners
nextBtn.addEventListener("click", showNextPerson);
prevBtn.addEventListener("click", showPrevPerson);
randomBtn.addEventListener("click", showRandomPerson);

// Show person based on item
function showPerson(person) {
    console.log("DOMContentLoaded");
    const item = reviewData[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.review; 
}

// Show next person
function showNextPerson() {
    currentItem++;
    if(currentItem > reviewData.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
}

// Show previous person
function showPrevPerson() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviewData.length - 1;
    }
    showPerson(currentItem);
}


// Get random person
function showRandomPerson(person) {
    currentItem = Math.floor(Math.random() * reviewData.length);
    showPerson(currentItem);
}



