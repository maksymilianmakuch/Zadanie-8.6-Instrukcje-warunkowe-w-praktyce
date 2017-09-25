var a = prompt('Podaj wartość a'),
	b = prompt('Podaj wartość b'),
	value = (a * a) + (2 * a * b) - (b * b);
if (value > 0) {
	console.log('Wynik jest dodatni i wynosi: ' + value);
	alert('Wynik jest dodatni i wynosi: ' + value);
} else if (value < 0) {
	console.log('Wynik jest ujemny i wynosi ' + value);
	alert('Wynik jest ujemny i wynosi: ' + value);
} else if (value == 0) {
	console.log('Wynik wynosi 0');
	alert('Wynik wynosi 0');
}