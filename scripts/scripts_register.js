/* - Menu Leiste - */
const toggleArea = document.getElementById("toggleArea");
const menu = document.getElementById("menu");

toggleArea.addEventListener("click", () => {
	menu.classList.toggle("visible");
});

function addMenuPoint(text, link) {
	const p = document.createElement("p");
	p.classList.add("menuPoint");

	const a = document.createElement("a");
	a.classList.add("linkDesign");
	a.href = link;
	a.textContent = text;

	p.appendChild(a);
	document.getElementById("menu").appendChild(p);
}

let signedUp = localStorage.getItem("signedUp");

if (signedUp === "true") {
	addMenuPoint("Home", "index.html");
	addMenuPoint("Eintragen", "rate.html");
	addMenuPoint("Übersicht", "overview.html");
	addMenuPoint("Konto", "account.html");
} else {
	addMenuPoint("Registrieren", "register.html");
	addMenuPoint("Anmelden", "login.html");
}
