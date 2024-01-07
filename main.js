/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addContactTab = () => {\r\n\tconst tabHolder = document.querySelector(\".tab-holder\");\r\n\ttabHolder.innerHTML = \"\";\r\n\r\n\tconst contactTab = document.createElement(\"div\");\r\n\tcontactTab.classList.add(\"tab\");\r\n\tcontactTab.classList.add(\"contact\");\r\n\ttabHolder.appendChild(contactTab);\r\n\r\n\tconst contactTitle = document.createElement(\"h2\");\r\n\tcontactTitle.textContent = \"Contact Us\";\r\n\tcontactTitle.classList.add(\"large-title\");\r\n\tcontactTab.appendChild(contactTitle);\r\n\r\n\tconst contactDescription = document.createElement(\"p\");\r\n\tcontactDescription.textContent =\r\n\t\t\"We would love to hear from you! Feel free to reach out using the contact information below\";\r\n\tcontactTab.appendChild(contactDescription);\r\n\r\n\tconst contactContainer = document.createElement(\"div\");\r\n\tcontactContainer.classList.add(\"contact-container\");\r\n\tcontactTab.appendChild(contactContainer);\r\n\r\n\tconst visitUsTitle = document.createElement(\"h3\");\r\n\tvisitUsTitle.textContent = \"Visit Us\";\r\n\tcontactContainer.appendChild(visitUsTitle);\r\n\tvisitUsTitle.classList.add(\"contact-info-title\");\r\n\r\n\tconst visitUs = document.createElement(\"p\");\r\n\tvisitUs.textContent = \"123 Main St, Anytown USA\";\r\n\tvisitUs.classList.add(\"contact-info\");\r\n\tvisitUs.classList.add(\"visitUs\");\r\n\tcontactContainer.appendChild(visitUs);\r\n\r\n\tconst callUsTitle = document.createElement(\"h3\");\r\n\tcallUsTitle.textContent = \"Call Us\";\r\n\tcontactContainer.appendChild(callUsTitle);\r\n\tcallUsTitle.classList.add(\"contact-info-title\");\r\n\r\n\tconst callUs = document.createElement(\"p\");\r\n\tcallUs.textContent = \"8182838\";\r\n\tcallUs.classList.add(\"contact-info\");\r\n\tcallUs.classList.add(\"callUs\");\r\n\tcontactContainer.appendChild(callUs);\r\n\r\n\tconst emailUsTitle = document.createElement(\"h3\");\r\n\temailUsTitle.textContent = \"Email Us\";\r\n\tcontactContainer.appendChild(emailUsTitle);\r\n\temailUsTitle.classList.add(\"contact-info-title\");\r\n\r\n\tconst emailUs = document.createElement(\"p\");\r\n\temailUs.textContent = \"contact@raffinement.com\";\r\n\temailUs.classList.add(\"contact-info\");\r\n\temailUs.classList.add(\"emailUs\");\r\n\tcontactContainer.appendChild(emailUs);\r\n\r\n\tconst contactImage = document.createElement(\"img\");\r\n\tcontactImage.src = \"img/lobby.jpg\";\r\n\tcontactImage.classList.add(\"contact-image\");\r\n\tcontactImage.classList.add(\"contactUs\");\r\n\tcontactTab.appendChild(contactImage);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addContactTab);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addHomeTab = () => {\r\n\tconst tabHolder = document.querySelector(\".tab-holder\");\r\n\ttabHolder.innerHTML = \"\";\r\n\tconst homeTab = document.createElement(\"div\");\r\n\thomeTab.classList.add(\"tab\");\r\n\thomeTab.classList.add(\"home\");\r\n\r\n\tconst homeTab_aboutUs = document.createElement(\"div\");\r\n\thomeTab_aboutUs.classList.add(\"about-us\");\r\n\thomeTab.appendChild(homeTab_aboutUs);\r\n\r\n\tconst aboutUs_title = document.createElement(\"h2\");\r\n\taboutUs_title.classList.add(\"large-title\");\r\n\taboutUs_title.textContent = \"Discover Gourmet Paradise\";\r\n\thomeTab_aboutUs.appendChild(aboutUs_title);\r\n\r\n\tconst homeDescription = document.createElement(\"p\");\r\n\thomeDescription.textContent =\r\n\t\t\"Immerse yourself in the epitome of French culinary artistry at our exquisite restaurant. Indulge in a symphony of flavors meticulously crafted with the finest ingredients, where each dish is a celebration of gastronomic sophistication.\";\r\n\thomeTab_aboutUs.appendChild(homeDescription);\r\n\r\n\tconst menuHighlights = document.createElement(\"div\");\r\n\tmenuHighlights.classList.add(\"menu-highlights\");\r\n\thomeTab.appendChild(menuHighlights);\r\n\r\n\tconst menuHighlights_textContainer = document.createElement(\"div\");\r\n\tmenuHighlights.appendChild(menuHighlights_textContainer);\r\n\tmenuHighlights_textContainer.classList.add(\"text-container\");\r\n\r\n\tconst menuHighlights_title = document.createElement(\"h2\");\r\n\tmenuHighlights_title.classList.add(\"medium-title\");\r\n\tmenuHighlights_title.textContent = \"Menu Highlights\";\r\n\tmenuHighlights_textContainer.appendChild(menuHighlights_title);\r\n\r\n\tconst menuHighlights_description = document.createElement(\"p\");\r\n\tmenuHighlights_description.textContent =\r\n\t\t\"Explore our curated menu featuring signature dishes like our Gourmet Grilled Filet, a harmonious blend of delicate textures and bold flavors. Experience decadence with Royal Sea Bass Elegance, showcasing our commitment to gastronomic excellence. Each creation is a masterpiece, promising an unforgettable dining experience.\";\r\n\tmenuHighlights_textContainer.appendChild(menuHighlights_description);\r\n\r\n\tconst menuHighlights_image1 = document.createElement(\"img\");\r\n\tmenuHighlights.appendChild(menuHighlights_image1);\r\n\tmenuHighlights_image1.classList.add(\"menu-highlight-image\");\r\n\tmenuHighlights_image1.src = \"img/filet.jpg\";\r\n\r\n\tconst chefCorner = document.createElement(\"div\");\r\n\tchefCorner.classList.add(\"chef-corner\");\r\n\thomeTab.appendChild(chefCorner);\r\n\r\n\tconst chefCorner_textContainer = document.createElement(\"div\");\r\n\tchefCorner.appendChild(chefCorner_textContainer);\r\n\tchefCorner_textContainer.classList.add(\"text-container\");\r\n\r\n\tconst chefCorner_title = document.createElement(\"h2\");\r\n\tchefCorner_title.classList.add(\"medium-title\");\r\n\tchefCorner_title.textContent = \"Chef's Corner\";\r\n\tchefCorner_textContainer.appendChild(chefCorner_title);\r\n\r\n\tconst chefCorner_description = document.createElement(\"p\");\r\n\tchefCorner_description.textContent =\r\n\t\t\"Meet Auguste Gusteau and our culinary team, bringing several years of collective experience to the kitchen. Their passion for innovation and dedication to French cuisine infuse each dish with a distinctive flair. Bon appétit!\";\r\n\tchefCorner_textContainer.appendChild(chefCorner_description);\r\n\r\n\tconst chefCorner_image = document.createElement(\"img\");\r\n\tchefCorner.appendChild(chefCorner_image);\r\n\tchefCorner_image.classList.add(\"chef-corner-image\");\r\n\tchefCorner_image.src = \"img/chef.jpg\";\r\n\ttabHolder.appendChild(homeTab);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addHomeTab);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\nconst header = document.createElement(\"header\");\r\nconst nav = document.createElement(\"nav\");\r\n\r\nheader.appendChild(nav);\r\ncontent.appendChild(header);\r\n\r\nconst headerContainer = document.createElement(\"div\");\r\nheaderContainer.classList.add(\"header-container\");\r\nconst headerTitle = document.createElement(\"h1\");\r\nheaderTitle.textContent = \"Raffinement\";\r\nconst headerSubtitle = document.createElement(\"h2\");\r\nheaderSubtitle.textContent = \"French Elegance Redefined\";\r\nheaderContainer.appendChild(headerTitle);\r\nheaderContainer.appendChild(headerSubtitle);\r\n\r\nnav.appendChild(headerContainer);\r\n\r\nconst menuElement = document.createElement(\"ul\");\r\nconst menuItems = [\r\n\t{ id: \"home\", name: \"Home\" },\r\n\t{ id: \"menu\", name: \"Menu\" },\r\n\t{ id: \"contact\", name: \"Contact\" },\r\n];\r\nnav.appendChild(menuElement);\r\n\r\nfor (const menuItem of menuItems) {\r\n\tconst menuItemElement = document.createElement(\"li\");\r\n\tmenuItemElement.id = menuItem.id;\r\n\tmenuItemElement.classList.add(\"menu-item\");\r\n\tmenuItemElement.textContent = menuItem.name;\r\n\tmenuElement.appendChild(menuItemElement);\r\n}\r\n// Tab holder\r\nconst tabHolder = document.createElement(\"div\");\r\ncontent.appendChild(tabHolder);\r\ntabHolder.classList.add(\"tab-holder\");\r\n\r\n// Footer\r\nconst footer = document.createElement(\"footer\");\r\nconst footerText = document.createElement(\"p\");\r\n// Gett current year\r\nconst currentYear = new Date().getFullYear();\r\nfooterText.innerHTML += `Developed by <a href=\"https://github.com/canizalesJd\" target=\"_blank\">Jose Canizales</a> © ${currentYear}`;\r\nfooter.classList.add(\"footer\");\r\nfooter.appendChild(footerText);\r\ncontent.appendChild(footer);\r\n\r\n// Menu options\r\nconst home = document.getElementById(\"home\");\r\n\r\nconst cleanActive = () => {\r\n\tconst menuItems = document.querySelectorAll(\".menu-item\");\r\n\tmenuItems.forEach((item) => {\r\n\t\titem.classList.remove(\"active\");\r\n\t});\r\n};\r\n\r\n// Add home tab by default\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nhome.classList.add(\"active\");\r\nhome.addEventListener(\"click\", () => {\r\n\t(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\tcleanActive();\r\n\thome.classList.add(\"active\");\r\n});\r\n// Add menu content\r\nconst menu = document.getElementById(\"menu\");\r\nmenu.addEventListener(\"click\", () => {\r\n\t(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\tcleanActive();\r\n\tmenu.classList.add(\"active\");\r\n});\r\n\r\nconst contact = document.getElementById(\"contact\");\r\ncontact.addEventListener(\"click\", () => {\r\n\t(0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\tcleanActive();\r\n\tcontact.classList.add(\"active\");\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu":
/*!******************!*\
  !*** ./src/menu ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addMenuTab = () => {\r\n\tconst tabHolder = document.querySelector(\".tab-holder\");\r\n\ttabHolder.innerHTML = \"\";\r\n\r\n\tconst menuTab = document.createElement(\"div\");\r\n\tmenuTab.classList.add(\"tab\");\r\n\tmenuTab.classList.add(\"menu\");\r\n\ttabHolder.appendChild(menuTab);\r\n\r\n\tconst menuTitle = document.createElement(\"h2\");\r\n\tmenuTitle.textContent = \"Taste our Gastronomic Delights\";\r\n\tmenuTitle.classList.add(\"large-title\");\r\n\tmenuTab.appendChild(menuTitle);\r\n\r\n\tconst menuDescription = document.createElement(\"p\");\r\n\tmenuDescription.classList.add(\"description\");\r\n\tmenuDescription.textContent =\r\n\t\t\"Embark on a culinary odyssey at Raffinement. Our menu is a testament to the art of gastronomy, meticulously curated to elevate your dining experience. From succulent steaks to exquisite seafood and delightful vegetarian options, each dish is a symphony of flavors crafted with passion and precision.\";\r\n\tmenuTab.appendChild(menuDescription);\r\n\r\n\tconst menuOptionsContainer = document.createElement(\"div\");\r\n\tmenuOptionsContainer.classList.add(\"menu-options\");\r\n\tmenuTab.appendChild(menuOptionsContainer);\r\n\r\n\t// Mapping menu options\r\n\tconst menuOptions = [\r\n\t\t{\r\n\t\t\tname: \"Truffle-infused Filet Mignon\",\r\n\t\t\tdescription:\r\n\t\t\t\t\"Prime filet mignon delicately seasoned and grilled to perfection, topped with a decadent truffle-infused demi-glace. Served with roasted garlic mashed potatoes and sautéed asparagus.\",\r\n\t\t\tsrc: \"img/filet.jpg\",\r\n\t\t},\r\n\t\t{\r\n\t\t\tname: \"Pan-seared Sea Bass with Citrus Beurre Blanc\",\r\n\t\t\tdescription:\r\n\t\t\t\t\"Fresh sea bass fillet pan-seared to a golden crisp, accompanied by a luscious citrus beurre blanc sauce. Paired with wild rice pilaf and steamed French beans.\",\r\n\t\t\tsrc: \"img/fish.jpg\",\r\n\t\t},\r\n\t\t{\r\n\t\t\tname: \"Lobster Ravioli in Champagne Cream Sauce\",\r\n\t\t\tdescription:\r\n\t\t\t\t\"Handcrafted lobster-filled ravioli bathed in a luxurious champagne cream sauce, garnished with chives and Parmesan. A harmonious blend of flavors for the seafood connoisseur.\",\r\n\t\t\tsrc: \"img/lobster-ravioli.jpg\",\r\n\t\t},\r\n\t\t{\r\n\t\t\tname: \"Duck Confit with Blackberry Gastrique\",\r\n\t\t\tdescription:\r\n\t\t\t\t\"Slow-cooked duck leg confit, crisped to perfection, drizzled with a blackberry gastrique. Served alongside sweet potato puree and caramelized Brussels sprouts.\",\r\n\t\t\tsrc: \"img/duck-confit.jpeg\",\r\n\t\t},\r\n\t\t{\r\n\t\t\tname: \"Miso-glazed Chilean Sea Bass\",\r\n\t\t\tdescription:\r\n\t\t\t\t\"Chilean sea bass marinated in a savory miso glaze, oven-roasted to a succulent finish. Accompanied by ginger-infused jasmine rice and stir-fried baby bok choy.\",\r\n\t\t\tsrc: \"img/chilean-sea-bass.jpeg\",\r\n\t\t},\r\n\t\t{\r\n\t\t\tname: \"Grilled Lamb Chops with Rosemary Demi-Glace\",\r\n\t\t\tdescription:\r\n\t\t\t\t\"Tender lamb chops marinated in a blend of aromatic herbs, grilled to perfection, and drizzled with a rich rosemary-infused demi-glace. Accompanied by garlic mashed potatoes and sautéed seasonal vegetables.\",\r\n\t\t\tsrc: \"img/lamb-chops.jpeg\",\r\n\t\t},\r\n\t];\r\n\r\n\t// Creating a menu card for each option\r\n\tfor (const option of menuOptions) {\r\n\t\tconst menuCard = document.createElement(\"div\");\r\n\t\tmenuCard.classList.add(\"menu-card\");\r\n\t\tmenuOptionsContainer.appendChild(menuCard);\r\n\r\n\t\tconst menuImage = document.createElement(\"img\");\r\n\t\tmenuImage.src = option.src;\r\n\t\tmenuImage.alt = option.name;\r\n\t\tmenuCard.appendChild(menuImage);\r\n\r\n\t\tconst menuTitle = document.createElement(\"h3\");\r\n\t\tmenuTitle.textContent = option.name;\r\n\t\tmenuCard.appendChild(menuTitle);\r\n\r\n\t\tconst menuDescription = document.createElement(\"p\");\r\n\t\tmenuDescription.textContent = option.description;\r\n\t\tmenuCard.appendChild(menuDescription);\r\n\t}\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMenuTab);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;