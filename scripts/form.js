const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

const productElement = document.getElementById("product");

products.forEach((product, index) => {
    const option = document.createElement("option");
    option.id = product.id;
    option.textContent = `${product.name} (${product.averagerating})`;
    productElement.appendChild(option);
})

function submitted(e) {
    const submissions = localStorage.getItem("submissionsCount") || 0;
    const newSubmissionCount = parseInt(submissions)+1;
    console.log(newSubmissionCount);
    localStorage.setItem("submissionsCount", newSubmissionCount);
}

const formElement = document.getElementById("form");
formElement.addEventListener("submit", submitted);