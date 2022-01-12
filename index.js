// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// FLATTEN N-DIMENSINAL ARAAY

const arr = [1, 2, [3, 4], 5, [6, [7, 8], 9], 10];
/* console.log(arr); */

function flatten(val) {

	return val.reduce((flat, toFlatten) => {
		return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	}, [])
}

console.log(flatten(arr));