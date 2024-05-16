document.getElementById('detectButton').addEventListener('click', function() {
	var numberInput = document.getElementById('numberInput');
	var number = numberInput.value;
	var resultElement = document.getElementById('result');
	
	if(number == ""){
		resultElement.textContent = "You have to input number";
	}else{
		if (isScientificNumber(number) || isRealNumber(number)) {
			resultElement.textContent = number + " is a scientific number.";
		} else {
			resultElement.textContent = number + " is not a scientific number.";
		}
	}
});

function isScientificNumber(number) {
	return /^-?\d+\.?\d*e[-+]?\d+$/i.test(number);
}

function isRealNumber(number) {
	return !isNaN(parseFloat(number)) && isFinite(number);
}