// Get the URL query parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the values of the "name", "price", "description", and "image" parameters
const itemName = urlParams.get("name");
const itemPrice = urlParams.get("price");
const itemDescription = urlParams.get("description");
const itemImage = urlParams.get("image");
console.log(itemImage);
// Display the values in the HTML
document.getElementById("lp-item-image").src = itemImage;
document.getElementById("lp-item-name").textContent = itemName;
document.getElementById("lp-item-price").textContent = itemPrice;
document.getElementById("lp-item-description").textContent = itemDescription;
