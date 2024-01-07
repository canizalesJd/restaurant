const addContactTab = () => {
	const tabHolder = document.querySelector(".tab-holder");
	tabHolder.innerHTML = "";

	const contactTab = document.createElement("div");
	contactTab.classList.add("tab");
	contactTab.classList.add("contact");
	tabHolder.appendChild(contactTab);

	const contactTitle = document.createElement("h2");
	contactTitle.textContent = "Contact Us";
	contactTitle.classList.add("large-title");
	contactTab.appendChild(contactTitle);

	const contactDescription = document.createElement("p");
	contactDescription.textContent =
		"We would love to hear from you! Feel free to reach out using the contact information below";
	contactTab.appendChild(contactDescription);

	const contactContainer = document.createElement("div");
	contactContainer.classList.add("contact-container");
	contactTab.appendChild(contactContainer);

	const visitUsTitle = document.createElement("h3");
	visitUsTitle.textContent = "Visit Us";
	contactContainer.appendChild(visitUsTitle);
	visitUsTitle.classList.add("contact-info-title");

	const visitUs = document.createElement("p");
	visitUs.textContent = "123 Main St, Anytown USA";
	visitUs.classList.add("contact-info");
	visitUs.classList.add("visitUs");
	contactContainer.appendChild(visitUs);

	const callUsTitle = document.createElement("h3");
	callUsTitle.textContent = "Call Us";
	contactContainer.appendChild(callUsTitle);
	callUsTitle.classList.add("contact-info-title");

	const callUs = document.createElement("p");
	callUs.textContent = "8182838";
	callUs.classList.add("contact-info");
	callUs.classList.add("callUs");
	contactContainer.appendChild(callUs);

	const emailUsTitle = document.createElement("h3");
	emailUsTitle.textContent = "Email Us";
	contactContainer.appendChild(emailUsTitle);
	emailUsTitle.classList.add("contact-info-title");

	const emailUs = document.createElement("p");
	emailUs.textContent = "contact@raffinement.com";
	emailUs.classList.add("contact-info");
	emailUs.classList.add("emailUs");
	contactContainer.appendChild(emailUs);

	const contactImage = document.createElement("img");
	contactImage.src = "img/lobby.jpg";
	contactImage.classList.add("contact-image");
	contactImage.classList.add("contactUs");
	contactTab.appendChild(contactImage);
};
export default addContactTab;
