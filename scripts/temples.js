// Modify the last modification date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentYearElement = document.getElementById('currentYear');
const lastModifiedElement = document.getElementById('lastModified');

currentYearElement.innerText = currentYear

lastModifiedElement.innerText = `Last Modification: ${document.lastModified}`;

// Add menu button functionality
const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");

const navElement = document.getElementById("nav");
const header = document.querySelector("header");

function toggleNav()
{
    navElement.classList.toggle("mobile-nav");
    header.classList.toggle("mobile-nav-header");
}

openMenuBtn.addEventListener("click", ()=> {
    toggleNav();
});

closeMenuBtn.addEventListener("click", ()=> {
    toggleNav();
});