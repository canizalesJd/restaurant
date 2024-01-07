import addHomeTab from "./home";
import addMenuTab from "./menu";
import addContactTab from "./contact";

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

const menuElement = document.createElement("ul");
const menuItems = [
	{ id: "home", name: "Home" },
	{ id: "menu", name: "Menu" },
	{ id: "contact", name: "Contact" },
];
nav.appendChild(menuElement);

for (const menuItem of menuItems) {
	const menuItemElement = document.createElement("li");
	menuItemElement.id = menuItem.id;
	menuItemElement.classList.add("menu-item");
	menuItemElement.textContent = menuItem.name;
	menuElement.appendChild(menuItemElement);
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

// Menu options
const home = document.getElementById("home");

const cleanActive = () => {
	const menuItems = document.querySelectorAll(".menu-item");
	menuItems.forEach((item) => {
		item.classList.remove("active");
	});
};

// Add home tab by default
addHomeTab();
home.classList.add("active");
home.addEventListener("click", () => {
	addHomeTab();
	cleanActive();
	home.classList.add("active");
});
// Add menu content
const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
	addMenuTab();
	cleanActive();
	menu.classList.add("active");
});

const contact = document.getElementById("contact");
contact.addEventListener("click", () => {
	addContactTab();
	cleanActive();
	contact.classList.add("active");
});
