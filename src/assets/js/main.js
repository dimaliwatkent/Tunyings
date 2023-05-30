fetch("menu.json")
  .then((response) => response.json())
  .then((menu) => {
    const menuContainer = document.getElementById("menu");
    const allFilterButton = document.getElementById("all-filter");
    const pizzaFilterButton = document.getElementById("pizza-filter");

    // Function to filter the menu items by category
    function filterMenuItems(category) {
      // Remove all existing menu items
      menuContainer.innerHTML = "";

      // Filter menu items by category
      const filteredItems = category
        ? menu.menuItems.filter((item) => item.category === category)
        : menu.menuItems;

      // Create and append filtered menu items
      filteredItems.forEach(function (item) {
        // Create the menu item element
        const menuItem = document.createElement("div");
        menuItem.className =
          "content-item col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center";

        // Create the menu item content
        const menuContent = `
          <div class="card">
            <div style="overflow: hidden;">
              <img class="card-img-top" src="${item.imageURL}" alt="${item.name} Logo" />
            </div>
            <div class="informations">
              <h5 class="item-name">${item.name}</h5>
              <p class="item-price">${item.price}</p>
              <p class="item-description">${item.description}</p>
            </div>
          </div>
        `;

        // Set the menu item content and append it to the menu container
        menuItem.innerHTML = menuContent;
        menuItem.onclick = function () {
          const urlParams = new URLSearchParams();
          urlParams.append("name", item.name);
          urlParams.append("price", item.price);
          urlParams.append("image", item.imageURL);
          urlParams.append("description", item.description);
          window.location.href = "./landing-page.html?" + urlParams.toString();
        };
        menuItem.innerHTML = menuContent;
        menuItem.onclick = function () {
          const urlParams = new URLSearchParams();
          urlParams.append("name", item.name);
          urlParams.append("price", item.price);
          urlParams.append("image", item.imageURL);
          urlParams.append("description", item.description);
          window.location.href = "./landing-page.html?" + urlParams.toString();
        };
        menuContainer.appendChild(menuItem);
      });
    }

    // Event listener for the "All" filter button click
    allFilterButton.addEventListener("click", function () {
      // Add the "active" class to the "All" button and remove it from the "Pizza" button
      allFilterButton.classList.add("active");
      pizzaFilterButton.classList.remove("active");

      filterMenuItems(); // Show all items
    });

    // Event listener for the "Pizza" filter button click
    pizzaFilterButton.addEventListener("click", function () {
      // Add the "active" class to the "Pizza" button and remove it from the "All" button
      pizzaFilterButton.classList.add("active");
      allFilterButton.classList.remove("active");

      filterMenuItems("Pizza"); // Show only pizzas
    });

    // Initially load all menu items
    filterMenuItems();
  })
  .catch((error) => {
    console.error("Error loading menu:", error);
  });

// Carousel code remains the same
var nextButton = document.querySelector(".carousel-control-next");
setInterval(function () {
  nextButton.click();
}, 3000);
