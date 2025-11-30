/* Nur Übergangsweise */
localStorage.setItem("signedUp", false);

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
	addMenuPoint("Eintragen", "rate.html");
	addMenuPoint("Übersicht", "overview.html");
	addMenuPoint("Konto", "account.html");
} else {
	addMenuPoint("Registrieren", "register.html");
	addMenuPoint("Anmelden", "login.html");
}

/* - index.html Zitate - */
const quotes = [
	"Nicht die Dinge selbst beunruhigen die Menschen, sondern die Meinungen über die Dinge",
	"Das Herz hat seine Gründe, die der Verstand nicht kennt",
	"Die größte Entdeckung meiner Generation ist, dass ein Mensch sein Leben ändern kann, indem er seine Einstellung ändert",
	"Es sind nicht die Jahre deines Lebens, die zählen. Es ist das Leben in deinen Jahren",
	"Glück entsteht oft durch Aufmerksamkeit in den kleinen Dingen",
	"Diejenigen, die den Mut haben, Gefühle zu zeigen, haben den Mut zu leben",
	"Selbst im Sturm kannst du lernen, in deinem Inneren ruhig zu bleiben",
	"Die wahre Reise beginnt in dir selbst",
	"Manchmal ist das, was wir fühlen, wichtiger als das, was wir denken",
	"Wer seine Gefühle kennt, hat schon viel über sich gelernt",
	"Nicht, weil es schwer ist, wagen wir es nicht, sondern weil wir es nicht wagen, ist es schwer",
	"Das Leben ist wirklich einfach, aber wir bestehen darauf, es kompliziert zu machen",
	"Die Seele ernährt sich von dem, was sie erfreut",
	"Die größte Heilung für einen Menschen ist, dass er erkennt, dass er geliebt wird",
	"Der größte Mut ist, seine Gefühle zu zeigen",
	"Gefühle wollen nicht bewertet, sondern verstanden werden",
	"Emotionen sind Wegweiser, keine Urteile",
	"Manchmal braucht das Herz nur einen Moment der Stille",
	"Jeder Gedanke trägt eine Farbe der Stimmung",
	"Selbst kleine Gefühle verdienen Aufmerksamkeit",
	"Innere Ruhe beginnt mit dem Zulassen von Emotionen",
	"Manchmal spricht die Stille lauter als Worte",
	"Jede Stimmung ist ein Teil deiner Geschichte",
	"Gefühle sind wie Wolken – sie ziehen, aber sie vergehen",
	"Akzeptiere das Jetzt, so wie es sich anfühlt",
];

const quotesAuthors = [
	"Epiktet",
	"Blaise Pascal",
	"William James",
	"Abraham Lincoln",
	"Wilhelm von Humboldt",
	"Brené Brown",
	"Thích Nhất Hạnh",
	"Rumi",
	"Leo Buscaglia",
	"Luc de Clapiers",
	"Seneca",
	"Confucius",
	"Augustinus",
	"Victor Hugo",
	"Brené Brown",
	"Unbekannt",
	"Unbekannt",
	"Unbekannt",
	"Unbekannt",
	"Unbekannt",
	"Unbekannt",
	"Unbekannt",
	"Unbekannt",
	"Unbekannt",
	"Unbekannt",
];

const currentTime = new Date();
const targetTime = new Date();

targetTime.setDate(currentTime.getDate() + 1);
targetTime.setHours(0);
targetTime.setMinutes(0);
targetTime.setSeconds(0);
targetTime.setMilliseconds(0);

if (localStorage.getItem("quoteTime") === null) {
	localStorage.setItem("quoteTime", targetTime);
}

const checkQuote = new Date(localStorage.getItem("quoteTime"));

if (currentTime < checkQuote) {
	const quoteDelay = targetTime - currentTime;
	setTimeout(() => {
		const randomQuoteOfTheDay = Math.floor(Math.random() * quotes.length);
		const updatedTargetTime = targetTime;
		updatedTargetTime.setDate(targetTime.getDate() + 1);
		localStorage.setItem("quoteOfTheDay", randomQuoteOfTheDay);
		localStorage.setItem("quoteTime", updatedTargetTime);
		updateQuote();
	}, quoteDelay);
} else {
	const newRandomQuoteOfTheDay = Math.floor(Math.random() * quotes.length);
	localStorage.setItem("quoteOfTheDay", newRandomQuoteOfTheDay);
	localStorage.setItem("quoteTime", targetTime);
}

if (localStorage.getItem("quoteOfTheDay") === null || localStorage.getItem("quoteTime") === null) {
	const firstRandomQuoteOfTheDay = Math.floor(Math.random() * quotes.length);
	localStorage.setItem("quoteOfTheDay", firstRandomQuoteOfTheDay);
	localStorage.setItem("quoteTime", targetTime);
}

const quoteOfTheDayParagraph = document.getElementById("quoteOfTheDay");
const quoteOfTheDayAuthor = document.getElementById("quoteOfTheDayAuthor");

function updateQuote() {
	quoteOfTheDayParagraph.textContent = quotes[Number(localStorage.getItem("quoteOfTheDay"))];
	quoteOfTheDayAuthor.textContent = quotesAuthors[Number(localStorage.getItem("quoteOfTheDay"))];
}

updateQuote();
