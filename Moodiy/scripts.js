/* - Menu Leiste - */
const toggleArea = document.getElementById("toggleArea");
const menu = document.getElementById("menu");

toggleArea.addEventListener("click", () => {
	menu.classList.toggle("visible");
});

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

const quoteDelay = targetTime - currentTime;
setTimeout(() => {
	const randomQuoteOfTheDay = Math.round(Math.random() * (quotes.length - 1));
	localStorage.setItem("quoteOfTheDay", randomQuoteOfTheDay);
	updateQuote();
}, quoteDelay);

if (localStorage.getItem("quoteOfTheDay") === null) {
	const firstRandomQuoteOfTheDay = Math.round(Math.random() * (quotes.length - 1));
	localStorage.setItem("quoteOfTheDay", firstRandomQuoteOfTheDay);
}

const quoteOfTheDayParagraph = document.getElementById("quoteOfTheDay");
const quoteOfTheDayAuthor = document.getElementById("quoteOfTheDayAuthor");

function updateQuote() {
	if (quoteOfTheDayParagraph && quoteOfTheDayAuthor) {
		quoteOfTheDayParagraph.textContent = quotes[localStorage.getItem("quoteOfTheDay")];
		quoteOfTheDayAuthor.textContent = quotesAuthors[localStorage.getItem("quoteOfTheDay")];
	}
}

updateQuote();

/* - rate.html checkbox uncheck - */
function rateCheckboxEmotionNone() {
	document.querySelectorAll('input[type="checkbox"].checkboxEmotionUncheck').forEach((checkbox) => {
		checkbox.checked = false;
	});
}

function rateCheckboxEmotionAny() {
	document.getElementById("checkboxEmotionNone").checked = false;
}

/* - rate.html custom color picker */
const colorpicker = document.getElementById("radioColorPickInput");
const colorchecker = document.getElementById("radioColorPickDiv");

if (colorpicker && colorchecker) {
	colorpicker.addEventListener("input", () => {
		colorchecker.style.backgroundColor = colorpicker.value;
	});
}

const colorPickOptions = [
	document.getElementById("radioColorPink"),
	document.getElementById("radioColorViolet"),
	document.getElementById("radioColorYellow"),
	document.getElementById("radioColorGreen"),
	document.getElementById("radioColorGray"),
	document.getElementById("radioColorBlack"),
	document.getElementById("radioColorPick"),
];

const emotionPickOptions = [
	document.getElementById("checkboxEmotionHappy"),
	document.getElementById("checkboxEmotionSatisfied"),
	document.getElementById("checkboxEmotionSad"),
	document.getElementById("checkboxEmotionAngry"),
	document.getElementById("checkboxEmotionAnxious"),
	document.getElementById("checkboxEmotionBurdened"),
	document.getElementById("checkboxEmotionThoughtful"),
	document.getElementById("checkboxEmotionNone"),
];

const numberPickOptions = [
	document.getElementById("radioNumberOne"),
	document.getElementById("radioNumberTwo"),
	document.getElementById("radioNumberThree"),
	document.getElementById("radioNumberFour"),
	document.getElementById("radioNumberFive"),
	document.getElementById("radioNumberSix"),
	document.getElementById("radioNumberSeven"),
	document.getElementById("radioNumberEight"),
	document.getElementById("radioNumberNine"),
	document.getElementById("radioNumberTen"),
];

const activityPickOptions = [
	document.getElementById("radioActivityRelax"),
	document.getElementById("radioActivityWork"),
	document.getElementById("radioActivityLearn"),
	document.getElementById("radioActivitySport"),
	document.getElementById("radioActivityMusic"),
	document.getElementById("radioActivityOutside"),
	document.getElementById("radioActivityElse"),
];

const optionalInputs = [
	document.getElementById("textareaInput"),
	document.getElementById("textEntryToday"),
	document.getElementById("textEntryThoughts"),
	document.getElementById("textEntryFocus"),
];

const optionalInputsCheckbox = [
	document.getElementById("rangeMoodEnergyCheckbox"),
	document.getElementById("rangeMoodEnergy"),
	document.getElementById("rangeMoodStressCheckbox"),
	document.getElementById("rangeMoodStress"),
	document.getElementById("rangeMoodMotivationCheckbox"),
	document.getElementById("rangeMoodMotivation"),
];

const rateFormularSubmit = document.getElementById("mainRateFormularSubmit");

rateFormularSubmit.addEventListener("click", () => {
	function anyChecked(pickOption) {
		for (let i = 0; i < pickOption.length; i++) {
			if (pickOption[i].checked) {
				return true;
			}
		}
		return false;
	}

	const colorPickSelected = anyChecked(colorPickOptions);
	const emotionPickSelected = anyChecked(emotionPickOptions);
	const numberPickSelected = anyChecked(numberPickOptions);
	const activityPickSelected = anyChecked(activityPickOptions);

	function safeChecked() {}

	if (colorPickSelected && emotionPickSelected && numberPickSelected && activityPickSelected) {
		console.log("Alles verpflichtende wurde ausgefüllt!");
	} else {
		console.log("Es wurde nicht alles verpflichtende ausgefühlt!");
	}
});
