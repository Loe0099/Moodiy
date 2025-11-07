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

if (localStorage.getItem("quoteTime") === null) {
	localStorage.setItem("quoteTime", targetTime);
}

const checkQuote = new Date(localStorage.getItem("quoteTime"));

if (currentTime < checkQuote) {
	const quoteDelay = targetTime - currentTime;
	setTimeout(() => {
		const randomQuoteOfTheDay = Math.floor(Math.random() * quotes.length);
		localStorage.setItem("quoteOfTheDay", randomQuoteOfTheDay);
		localStorage.setItem("quoteTime", targetTime);
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
	if (quoteOfTheDayParagraph && quoteOfTheDayAuthor) {
		quoteOfTheDayParagraph.textContent = quotes[Number(localStorage.getItem("quoteOfTheDay"))];
		quoteOfTheDayAuthor.textContent = quotesAuthors[Number(localStorage.getItem("quoteOfTheDay"))];
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

/* - rate.html Formular speichern und überprüfen - */

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

const emotionPickOptionValue = [];

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

const requiredPickOption = [colorPickOptions, numberPickOptions, activityPickOptions];

const requiredPickOptionValue = [[], [], []];

const optionalInputs = [
	document.getElementById("textareaInput"),
	document.getElementById("textEntryToday"),
	document.getElementById("textEntryThoughts"),
	document.getElementById("textEntryFocus"),
];

const optionalInputsValue = [];

const optionalInputsCheckbox = [
	document.getElementById("rangeMoodEnergyCheckbox"),
	document.getElementById("rangeMoodStressCheckbox"),
	document.getElementById("rangeMoodMotivationCheckbox"),
];

const optionalInputsCheckboxRange = [
	document.getElementById("rangeMoodEnergy"),
	document.getElementById("rangeMoodStress"),
	document.getElementById("rangeMoodMotivation"),
];

const optionalInputsCheckboxValue = [];

const rateFormularSubmit = document.getElementById("mainRateFormularSubmit");

if (rateFormularSubmit) {
	rateFormularSubmit.addEventListener("click", () => {
		function anyChecked(pickOption) {
			for (let i = 0; i < pickOption.length; i++) {
				if (pickOption[i].checked) {
					if (pickOption[i] == document.getElementById("radioActivityElse")) {
						if (document.getElementById("radioActivityElseInput").value.trim() !== "") {
							return true;
						}
					} else {
						return true;
					}
				}
			}
			return false;
		}

		function safeInput(requiredPickInputOption) {
			for (let i = 0; i < requiredPickInputOption.length; i++) {
				for (let a = 0; a < requiredPickInputOption[i].length; a++) {
					if (requiredPickInputOption[i][a].checked) {
						if (i === 0 && a === 6) {
							requiredPickOptionValue[i][a] = document.getElementById("radioColorPickInput").value;
						} else if (i === 2 && a === 6) {
							requiredPickOptionValue[i][a] = document.getElementById("radioActivityElseInput").value;
						} else {
							requiredPickOptionValue[i][a] = true;
						}
					} else {
						requiredPickOptionValue[i][a] = false;
					}
				}
			}
			return requiredPickOptionValue;
		}

		function safeMultipleInput(requiredMultiplePickInputOption) {
			for (let i = 0; i < requiredMultiplePickInputOption.length; i++) {
				if (requiredMultiplePickInputOption[i].checked) {
					emotionPickOptionValue[i] = true;
				} else {
					emotionPickOptionValue[i] = false;
				}
			}
			return emotionPickOptionValue;
		}

		function safeOptionalInput(optionalInput) {
			for (let i = 0; i < optionalInput.length; i++) {
				if (optionalInput[i].value !== "") {
					optionalInputsValue[i] = optionalInput[i].value;
				} else {
					optionalInputsValue[i] = false;
				}
			}
			return optionalInputsValue;
		}

		function safeOptionalCheckedInput(optionalInputCheckbox) {
			for (let i = 0; i < optionalInputCheckbox.length; i++) {
				if (optionalInputCheckbox[i].checked) {
					optionalInputsCheckboxValue[i] = optionalInputsCheckboxRange[i].value;
				} else {
					optionalInputsCheckboxValue[i] = false;
				}
			}
			return optionalInputsCheckboxValue;
		}

		const colorPickSelected = anyChecked(colorPickOptions);
		const emotionPickSelected = anyChecked(emotionPickOptions);
		const numberPickSelected = anyChecked(numberPickOptions);
		const activityPickSelected = anyChecked(activityPickOptions);

		if (colorPickSelected && emotionPickSelected && numberPickSelected && activityPickSelected) {
			const safedPickInput = safeInput(requiredPickOption);
			const safedMultiplePickInput = safeMultipleInput(emotionPickOptions);
			const safedOptionalInput = safeOptionalInput(optionalInputs);
			const safedOptionalInputCheckbox = safeOptionalCheckedInput(optionalInputsCheckbox);
		}
	});
}
