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

// Temples
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Brigham City Utah",
        location: "Brigham City, Utah",
        dedicated: "2012, September 23",
        area: 36000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-39612-main.jpg"
      },
      {
        templeName: "NatalNairobi Kenya",
        location: "Nairobi",
        dedicated: "2025, May 18",
        area: 19800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-56573-main.jpg"
      },
      {
        templeName: "Madrid Spain",
        location: "Madrid",
        dedicated: "1999, March 19-21",
        area: 45800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
      },
  ];

const templesElement = document.getElementById("temples");

function renderTemples(filter)
{
    templesElement.innerHTML = "";
    temples.forEach(temple => {
        if (filter && !filter(temple))
        {
            return;
        }

        const div = document.createElement("div");
    
        div.innerHTML = `
        <div class="temple">
             <h2>${temple.templeName}</h2>
             <div>
                 <p>Location: <span>${temple.location}</span></p>
                 <p>Dedicated: <span>${temple.dedicated}</span></p>
                 <p>Size: <span>${temple.area} sq ft</span></p>
             </div>
             <img src="${temple.imageUrl}" alt="Washington D.C. Temple" loading="lazy">
        </div>
        `
        templesElement.appendChild(div);
    });
}

// Filters
function homeFilter()
{
    renderTemples();
}
function oldFilter()
{
    renderTemples((t)=>{
        return Number(t.dedicated.split(",")[0]) <= 2000;
    });
}
function newFilter()
{
    renderTemples((t)=>{
        return Number(t.dedicated.split(",")[0]) > 2000;
    });
}
function largeFilter()
{
    renderTemples((t)=>{
        return t.area > 90000;
    });
}
function smallFilter()
{
    renderTemples((t)=>{
        return t.area < 10000;
    });
}

homeFilter();