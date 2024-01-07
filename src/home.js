const addHomeTab = () => {
	const tabHolder = document.querySelector(".tab-holder");
	tabHolder.innerHTML = "";
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

	const menuHighlights_textContainer = document.createElement("div");
	menuHighlights.appendChild(menuHighlights_textContainer);
	menuHighlights_textContainer.classList.add("text-container");

	const menuHighlights_title = document.createElement("h2");
	menuHighlights_title.classList.add("medium-title");
	menuHighlights_title.textContent = "Menu Highlights";
	menuHighlights_textContainer.appendChild(menuHighlights_title);

	const menuHighlights_description = document.createElement("p");
	menuHighlights_description.textContent =
		"Explore our curated menu featuring signature dishes like our Gourmet Grilled Filet, a harmonious blend of delicate textures and bold flavors. Experience decadence with Royal Sea Bass Elegance, showcasing our commitment to gastronomic excellence. Each creation is a masterpiece, promising an unforgettable dining experience.";
	menuHighlights_textContainer.appendChild(menuHighlights_description);

	const menuHighlights_image1 = document.createElement("img");
	menuHighlights.appendChild(menuHighlights_image1);
	menuHighlights_image1.classList.add("menu-highlight-image");
	menuHighlights_image1.src = "img/filet.jpg";

	const chefCorner = document.createElement("div");
	chefCorner.classList.add("chef-corner");
	homeTab.appendChild(chefCorner);

	const chefCorner_textContainer = document.createElement("div");
	chefCorner.appendChild(chefCorner_textContainer);
	chefCorner_textContainer.classList.add("text-container");

	const chefCorner_title = document.createElement("h2");
	chefCorner_title.classList.add("medium-title");
	chefCorner_title.textContent = "Chef's Corner";
	chefCorner_textContainer.appendChild(chefCorner_title);

	const chefCorner_description = document.createElement("p");
	chefCorner_description.textContent =
		"Meet Auguste Gusteau and our culinary team, bringing several years of collective experience to the kitchen. Their passion for innovation and dedication to French cuisine infuse each dish with a distinctive flair. Bon appétit!";
	chefCorner_textContainer.appendChild(chefCorner_description);

	const chefCorner_image = document.createElement("img");
	chefCorner.appendChild(chefCorner_image);
	chefCorner_image.classList.add("chef-corner-image");
	chefCorner_image.src = "img/chef.jpg";
	tabHolder.appendChild(homeTab);
};

export default addHomeTab;
