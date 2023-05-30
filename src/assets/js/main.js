fetch("menu.json")
  .then((response) => response.json())
  .then((menu) => {
    const menuContainer = document.getElementById("menu");

    menu.menuItems.forEach(function (item) {
      const menuItem = document.createElement("div");
      menuItem.className =
        "content-item col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center";

      const menuContent = `
      <div class="card">
        <div style="overflow: hidden;">
        <img class="card-img-top" src="${item.imageURL}" alt="${item.name} Logo" />
        </div>
        <div class="informations">
          <h5 class="item-name"> ${item.name}</h5>
          <p class="item-price">${item.price}</p>
          <p class="item-description">${item.description}</p>
        </div>
      </div>
      `;

      menuItem.innerHTML = menuContent;
      menuContainer.appendChild(menuItem);
    });
  })
  .catch((error) => {
    console.error("Error loading menu:", error);
  });

//carousel
var nextButton = document.querySelector(".carousel-control-next");
setInterval(function () {
  nextButton.click();
}, 3000);
