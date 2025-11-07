/* - Menu Leiste - */
const toggleArea = document.getElementById("toggleArea");
const menu = document.getElementById("menu");

toggleArea.addEventListener("click", () => {
	menu.classList.toggle("visible");
});

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

colorpicker.addEventListener("input", () => {
	colorchecker.style.backgroundColor = colorpicker.value;
});

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
