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

// main
const mainContent = document.createElement("div");
mainContent.classList.add("main-content");
content.appendChild(mainContent);

// Tab holder
const tabHolder = document.createElement("div");
mainContent.appendChild(tabHolder);
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
