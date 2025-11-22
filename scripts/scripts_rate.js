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

const optionalInputFields = [
	document.getElementById("textareaInput"),
	document.getElementById("textEntryToday"),
	document.getElementById("textEntryThoughts"),
	document.getElementById("textEntryFocus"),
];

const optionalInputCheckboxes = [
	document.getElementById("rangeMoodEnergyCheckbox"),
	document.getElementById("rangeMoodStressCheckbox"),
	document.getElementById("rangeMoodMotivationCheckbox"),
];

const optionalInputCheckboxRanges = [
	document.getElementById("rangeMoodEnergy"),
	document.getElementById("rangeMoodStress"),
	document.getElementById("rangeMoodMotivation"),
];

document.getElementById("mainRateFormularSubmit").addEventListener("click", () => {
	function anyChecked(pickOption) {
		for (let i = 0; i < pickOption.length; i++) {
			if (pickOption[i].checked) {
				if (pickOption[i] == document.getElementById("radioActivityElse")) {
					if (document.getElementById("radioActivityElseInput").value.trim() !== "") {
						return document.getElementById("radioActivityElseInput").value.trim();
					} else {
						return false;
					}
				} else if (pickOption[i] == document.getElementById("radioColorPick")) {
					return document.getElementById("radioColorPickInput").value;
				} else {
					return i;
				}
			}
		}
	}

	function multipleChecked(multiplePickOption) {
		let pickedEmotions = "";
		for (let i = 0; i < multiplePickOption.length; i++) {
			if (multiplePickOption[i].checked) {
				pickedEmotions = pickedEmotions + "" + i;
			}
		}
		if (pickedEmotions !== "") {
			Number(pickedEmotions);
			return pickedEmotions;
		} else {
			return;
		}
	}

	function optionalRangeInput(optionalInputs) {
		let rangeInputFields = "";
		for (i = 0; i < optionalInputs.length; i++) {
			if (optionalInputs[i].checked === true) {
				rangeInputFields = rangeInputFields + "" + optionalInputCheckboxRanges[i].value;
			} else {
				rangeInputFields = rangeInputFields + "e";
			}
		}
		return rangeInputFields;
	}

	const colorPickSelected = anyChecked(colorPickOptions);
	const numberPickSelected = anyChecked(numberPickOptions);
	const activityPickSelected = anyChecked(activityPickOptions);
	const emotionPickSelected = multipleChecked(emotionPickOptions);

	if (
		colorPickSelected !== undefined &&
		numberPickSelected !== undefined &&
		activityPickSelected !== undefined &&
		activityPickSelected !== false &&
		emotionPickSelected !== undefined
	) {
		const optionalTextareaInput = document.getElementById("textareaInput").value;
		const optionalTodayTextInput = document.getElementById("textEntryToday").value;
		const optionalToughtsTextInput = document.getElementById("textEntryThoughts").value;
		const optionalFocusTextInput = document.getElementById("textEntryFocus").value;
		const optionalRangeSelected = optionalRangeInput(optionalInputCheckboxes);
	}
});
