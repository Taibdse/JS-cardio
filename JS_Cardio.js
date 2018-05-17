function reverseString(str) {
	var reversedStr = '';
	//	for (let i = 0; i < str.length; i++) {
	//		reversedStr = str[i] + reversedStr;
	//	}
	//	return reversedStr;

	//	return str.split('').reverse().join('');

	//	str.split('').forEach(char => {
	//		reversedStr = char + reversedStr;
	//	})
	//	return reversedStr;

	//	return str.split('').reduce((revStr, char) =>
	//		char + revStr, '')

}

function isPalindrone(str) {
	//	var reverseString = str.split('').reverse().join('');
	//	return reverseString === str;


}

function reverseInt(int) {
	//	var reverseString = Math.abs(int).toString().split('').reverse().join('');
	//	return parseInt(reverseString) * Math.sign(int) == int;
}

function capitalizeChar(str) {
	//	return str.trim().replace(/ {2,}/g, ' ').toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
	//	return str.toLowerCase().replace(/\b[a-z]/gi, (char) => char.toUpperCase());

	//	var arr = str.toLowerCase().trim().replace(/ {2,}/g, ' ').split(' ');
	//	for (let i = 0; i < arr.length; i++) {
	//		arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
	//	}
	//	return arr.join(' ');

}


function maxCharacter(str) {
	//	console.log(str.trim().replace(/ {2,}/g, ' '));
	var obj = str.replace(/ /g, '').split('').reduce((acc, char, index) => {
		if (acc[char]) {
			acc[char]++;
		} else {
			acc[char] = 1;
		}
		return acc;
	}, {})
	var maxNum = 0;
	var maxChar = '';
	for (let prop in obj) {
		if (obj[prop] > maxNum) {
			maxNum = obj[prop];
			maxChar = prop;
		}
	}
	return {
		maxChar: maxChar,
		maxNum: maxNum
	};
}

function convertMoneyFrom(int) {
	let formatStr = '';
	let length = int.toString().length;
	int.toString().split('').reverse().forEach((char, index) => {
		if (index % 3 == 2 && index != length - 1)
			formatStr = formatStr + char + ',';
		else {
			formatStr = formatStr + char;
		}
	})
	return formatStr.split('').reverse().join('');
}

function longestWord(str) {
	//Create filterd array
	const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);

	//Sort by length
	const sortedWord = wordArr.sort((a, b) => b.length - a.length);


	//If multiple words, put into array
	const longestWordArray = sortedWord.filter(word => word.length == sortedWord[0].length);

	//Check if more than 1 word
	if (longestWordArray.length == 1) {
		return longestWordArray[0];
	} else {
		return longestWordArray;
	}

}

function chunkArray(arr, len) {
	//	if (len <= arr.length) {
	//		let index = 0;
	//		var chunkedArr = [];
	//		while (index < arr.length) {
	//			chunkedArr.push(arr.slice(index, index + len));
	//			index += len;
	//		}
	//		return chunkedArr;
	//	}

	var chunkedArray = []
	arr.forEach((val) => {
		var last = chunkedArray[chunkedArray.length - 1];
		if (!last || last.length == len) {
			chunkedArray.push([val]);
		} else {
			last.push(val);
		}
	})
	return chunkedArray;
}

function fattenArray(arrays) {
	//	return arrays.reduce((a, b) => a.concat(b))

	//	return [].concat.apply([], arrays);

	return [].concat(...arrays);
}

function isAnagram(str1, str2) {
	return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
	return str.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
}

function letterChanges(str) {
	var newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
		if (char == 'z' || char == 'Z') {
			return 'a';
		} else {
			return String.fromCharCode(char.charCodeAt() + 1);
		}
	})
	newStr = newStr.replace(/a|o|e|u|i/gi, char => char.toUpperCase())
	return newStr;
}



console.log(letterChanges('hello there'));
