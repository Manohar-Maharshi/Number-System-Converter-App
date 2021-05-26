const inputField = document.getElementById('inputField');
const form = document.getElementById('form');
const decimalNumber = document.getElementById('decimalNumber');
const binaryNumber = document.getElementById('binaryNumber');
const octalNumber = document.getElementById('octalNumber');
const hexNumber = document.getElementById('hexNumber');
const select = document.getElementById('selection');
const copy = document.querySelectorAll('#copy');

document.getElementById('selection').onchange = function (evt) {
	var selectedOptionValue = evt.target.value;
	if (selectedOptionValue === 'Decimal') {
		inputField.pattern = '[0-9]*';
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			inputFieldValue = inputField.value.toUpperCase();
			decimalToOther(inputFieldValue);
		});
	} else if (selectedOptionValue === 'Binary') {
		inputField.pattern = '[0-1]*';
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			inputFieldValue = inputField.value;
			binaryToOther(inputFieldValue.trim());
		});
	} else if (selectedOptionValue === 'Octal') {
		inputField.pattern = '[0-7]*';
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			inputFieldValue = inputField.value;
			octalToOther(inputFieldValue);
		});
	} else if (selectedOptionValue === 'Hex') {
		inputField.pattern = '[0-9a-fA-F]*';
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			inputFieldValue = inputField.value;
			hexToOther(inputFieldValue.toUpperCase());
		});
	} else if (selectedOptionValue === 'selectOne') {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			alert('Select Any Numerical Syystem from DropDown......(❁´◡`❁)');
		});
	}
};
const decimalToOther = (inputFieldValue) => {
	// Deciaml -> Decimal
	decimalNumber.innerHTML = inputFieldValue;

	// Decimal -> Binary
	decimalTobBinaryConverted = parseInt(inputFieldValue).toString(2);
	binaryNumber.innerHTML = decimalTobBinaryConverted;

	// Decimal -> Octal
	decimalToOctalConverted = parseInt(inputFieldValue).toString(8);
	octalNumber.innerHTML = decimalToOctalConverted;

	// Decimal -> Hex
	decimalToHexConverted = parseInt(inputFieldValue).toString(16).toUpperCase();
	hexNumber.innerHTML = decimalToHexConverted;
};
const binaryToOther = (inputFieldValue) => {
	if (inputFieldValue.search(/[10]+$/) != -1) {
		// Binary -> Binary
		binaryNumber.innerHTML = inputFieldValue;

		// Binary -> Decimal
		binaryToDecimal = parseInt(inputFieldValue, 2);
		decimalNumber.innerHTML = binaryToDecimal;

		// Binary -> Octal
		binarytoOctal = parseInt(inputFieldValue, 2).toString(8);
		octalNumber.innerHTML = binarytoOctal;

		// Binary -> Hex
		binaryToHex = parseInt(inputFieldValue, 2).toString(16).toUpperCase();
		hexNumber.innerHTML = binaryToHex;
	}
};
const octalToOther = (inputFieldValue) => {
	// Octal -> Octal
	octalNumber.innerHTML = inputFieldValue;

	// Octal -> Decimal
	octalToDecimal = parseInt(inputFieldValue, 8);
	decimalNumber.innerHTML = octalToDecimal;

	// Octal -> Binary
	octalToDecimalNum = parseInt(inputFieldValue, 8);
	octalToDecimalToBinary = parseInt(octalToDecimalNum).toString(2);
	binaryNumber.innerHTML = octalToDecimalToBinary;

	// Octal -> Hex
	octalToDecimalNumber = parseInt(inputFieldValue, 8);
	octalToDecimalToHex = parseInt(octalToDecimalNumber).toString(16).toUpperCase();
	hexNumber.innerHTML = octalToDecimalToHex;
};
const hexToOther = (inputFieldValue) => {
	inputFieldValue.toUpperCase();
	// Hex -> Hex
	hexNumber.innerHTML = inputFieldValue;

	// Hex -> Decimal
	hexToDecimal = parseInt(inputFieldValue, 16);
	decimalNumber.innerHTML = hexToDecimal;

	// Hex -> binary
	hexToDecimalNum = parseInt(inputFieldValue, 16);
	decimalTobBinaryNum = parseInt(hexToDecimalNum).toString(2);
	binaryNumber.innerHTML = decimalTobBinaryNum;

	// Hex -> Octal
	hexToDecimalNum = parseInt(inputFieldValue, 16);
	hexToDecimalToOctalNum = parseInt(hexToDecimalNum).toString(8);
	octalNumber.innerHTML = hexToDecimalToOctalNum;
};

copy.forEach(function lop(e) {
	e.addEventListener('click', function clickToCopy(e) {
		let copyElementValue = e.target.previousElementSibling.innerHTML;
		e.target.innerHTML = 'Copied!';
		var dummy = document.createElement('input');
		document.body.appendChild(dummy);
		dummy.setAttribute('id', 'dummy_id');
		document.getElementById('dummy_id').value = copyElementValue;
		dummy.select();
		document.execCommand('copy');
		document.body.removeChild(dummy);
	});
});
