const content = document.getElementById("content");

const header = document.createElement("header");
const nav = document.createElement("nav");

header.appendChild(nav);
content.appendChild(header);

const headerContainer = document.createElement("div");
headerContainer.classList.add("header-container");
const headerTitle = document.createElement("h1");
headerTitle.textContent = "Raffinement";
const headerSubtitle = document.createElement("h2");
headerSubtitle.textContent = "French Elegance Redefined";
headerContainer.appendChild(headerTitle);
headerContainer.appendChild(headerSubtitle);

nav.appendChild(headerContainer);

const menu = document.createElement("ul");
const menuItems = ["Home", "Menu", "Contact"];
nav.appendChild(menu);

for (item in menuItems) {
	const menuItem = document.createElement("li");
	menuItem.id = menuItems[item];
	menuItem.classList.add("menu-item");
	menuItem.textContent = menuItems[item];
	menu.appendChild(menuItem);
}

// Tab holder
const tabHolder = document.createElement("div");
content.appendChild(tabHolder);
tabHolder.classList.add("tab-holder");

// Footer

const footer = document.createElement("footer");
const footerText = document.createElement("p");
// Gett current year
const currentYear = new Date().getFullYear();
footerText.innerHTML += `Developed by <a href="https://github.com/canizalesJd" target="_blank">Jose Canizales</a> © ${currentYear}`;
footer.classList.add("footer");
footer.appendChild(footerText);
content.appendChild(footer);

// Home tab
const homeTab = document.createElement("div");
homeTab.classList.add("tab");
homeTab.classList.add("home");

const homeTab_aboutUs = document.createElement("div");
homeTab_aboutUs.classList.add("about-us");
homeTab.appendChild(homeTab_aboutUs);

const aboutUs_title = document.createElement("h2");
aboutUs_title.classList.add("large-title");
aboutUs_title.textContent = "Discover Gourmet Paradise";
homeTab_aboutUs.appendChild(aboutUs_title);

const homeDescription = document.createElement("p");
homeDescription.textContent =
	"Immerse yourself in the epitome of French culinary artistry at our exquisite restaurant. Indulge in a symphony of flavors meticulously crafted with the finest ingredients, where each dish is a celebration of gastronomic sophistication.";
homeTab_aboutUs.appendChild(homeDescription);

const menuHighlights = document.createElement("div");
menuHighlights.classList.add("menu-highlights");
homeTab.appendChild(menuHighlights);

const menuHighlights_title = document.createElement("h2");
menuHighlights_title.classList.add("medium-title");
menuHighlights_title.textContent = "Menu Highlights";
menuHighlights.appendChild(menuHighlights_title);

const menuHighlights_description = document.createElement("p");
menuHighlights_description.textContent =
	"Explore our curated menu featuring signature dishes like our Gourmet Grilled Filet, a harmonious blend of delicate textures and bold flavors. Experience decadence with Royal Sea Bass Elegance, showcasing our commitment to gastronomic excellence. Each creation is a masterpiece, promising an unforgettable dining experience.";
menuHighlights.appendChild(menuHighlights_description);

const menuHighlights_images = document.createElement("div");
menuHighlights.appendChild(menuHighlights_images);

const menuHighlights_images_image1 = document.createElement("img");
menuHighlights_images_image1.src = "img/filet.jpg";
menuHighlights_images.appendChild(menuHighlights_images_image1);

const menuHighlights_images_image2 = document.createElement("img");
menuHighlights_images_image2.src = "img/fish.jpg";
menuHighlights_images.appendChild(menuHighlights_images_image2);

tabHolder.appendChild(homeTab);
