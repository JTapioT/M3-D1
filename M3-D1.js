/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

function sumOfIntegers(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}
// console.log(sumOfIntegers(2,3));


/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

function twoIntegers(n1, n2) {
  if (n1 === 50 || n2 === 50 || n1 + n2 === 50) {
    return true;
  }
}
//console.log(twoIntegers(50,0));


/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

function removeCharacterAt(index, str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (i === index) {
      continue;
    } else {
      newString = newString + str[i];
    }
  }
  return newString;
}
//console.log(removeCharacterAt(3, "hello world"));


/* 4. Create a function to find and return the largest of three given integers. */

function largestOfThreeIntegers(n1, n2, n3) {
	let largestInteger;

    if(n1 > n2 && n1 > n3) {
			largestInteger = n1;
		} else if(n2 > n1 && n2 > n3) {
			largestInteger = n2;
		} else if(n3 > n1 && n3 > n2) {
			largestInteger = n3;
		}

	return largestInteger;
}
// console.log(largestOfThreeIntegers(1,2,3));
// console.log(largestOfThreeIntegers(1,3,2));
// console.log(largestOfThreeIntegers(3,2,1));


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

function integersInRange(n1, n2) {
  // n1 & n2 in range of 40-60
  // OR
  // n1 & n2 in range of 70-100

  if (
    (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) ||
    (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
// console.log(integersInRange(100,60));


/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

function repeatString(repeatAmount, str) {
  // For clarity and readability to myself:
  let repeatedString = str.repeat(repeatAmount);
  return repeatedString;

  // Concise way, I guess.
  // return str.repeat(repeatAmount);
}
//console.log(repeatString(3, "hello"));


/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

function revealTheCityName(partialStr) {
  if (partialStr === "Los" || partialStr === "New") {
    return partialStr + " " + "Angeles";
  } else {
    return false;
  }
}
//console.log(revealTheCityName("Los"));
//console.log(revealTheCityName("Foo"));


/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

// Not doing any type check etc.
// Hence, in god we trust and hope to have integers within the array.
function sumOfArrElements(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i];
  }
  return totalSum;
}
//console.log(sumOfArrElements([2,3,3]));


/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

function checkArrValue(arr) {
  if (arr.length === 2) {
    if (arr.includes(1) || arr.includes(3)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
//console.log(checkArrValue([2,3]));
//console.log(checkArrValue([2,2]));
//console.log(checkArrValue([2,2,4]));


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */

function arrayNotContainingCertainValue(arr) {
  if (arr.length === 2) {
		// Opposite of what .includes(1) or .includes(3) returns:
    if (!(arr.includes(1) || arr.includes(3))) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
//console.log(arrayNotContainingCertainValue([2,3]));
//console.log(arrayNotContainingCertainValue([2,2]));
//console.log(arrayNotContainingCertainValue([2,2,4]));



/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */

	function longestStrInArray(arr) {
		// Assumption, the longest string is first element of an array provided:
		let longestStr = arr[0];
		// Iterate over other strings in an array and compare the length.
		for(let i=1; i<arr.length; i++) {
			if(arr[i].length > longestStr.length) {
				longestStr = arr[i];
			}
		}

		return longestStr;
	}
	//console.log(longestStrInArray(["hello", "is", "it", "me", "you", "looking", "fooooor"]));


/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

function typeOfAngle(degree) {
	let typeOfAngle;

	if(degree >= 0 && degree < 90) {
		typeOfAngle = "acute";
	} else if(degree === 90) {
		typeOfAngle = "right";
	} else if(degree >= 90 && degree < 180) {
		typeOfAngle = "obtuse";
	} else if(degree === 180) {
		typeOfAngle = "straight";
	}

	return typeOfAngle;
}
//console.log(typeOfAngle(20));
//console.log(typeOfAngle(90));
//console.log(typeOfAngle(140));
//console.log(typeOfAngle(180));


/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

function indexOfGreatestInteger(arr) {
	// Assumption that first element of an array is already the greatest integer.
	let greatestIndex = 0;
	for(let i = 1; i < arr.length; i++) {

		if(arr[i] > arr[greatestIndex]) {
			greatestIndex = i;
		}

	}

	return greatestIndex;
}
// console.log(indexOfGreatestInteger([102,2,4,5,1,100]));


/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

function largestEvenOfArray(arr) {

	// Loop through the even numbers, assign to an array:
	let evenIntegers = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] % 2 === 0) {
			evenIntegers.push(arr[i]);
		}
	}

	// Loop through even integers again to find the largest even integer:
	// Once again, starting with assumption that first integer is the largest.
	let largestEven = evenIntegers[0];
	for(let i = 1; i < evenIntegers.length; i++) {
		if(evenIntegers[i] > largestEven) {
			largestEven = evenIntegers[i];
		}
	}
	return largestEven;
}
//console.log(largestEvenOfArray([2,3,7,65,3,44,101,102]));



/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

	function checkInteger(n1, n2) {
		if((n1 < 0 && n2 > 0) || (n1 > 0 && n2 < 0)) {
			return true;
		} else {
			return false;
		}
	}
	// console.log(checkInteger(200, 100));
	// console.log(checkInteger(200, -100));
	// console.log(checkInteger(-200, 100));



/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

function strModifier(str) {
	// If length < 3:
	if(str.length < 3) {
		return str.toUpperCase();
	}

	// Sub-string of first three and lowercase the letters:
	let firstThreeToLowerCase = str.substring(0, 3).toLowerCase();
	// Slice from third character until the end of string characters, uppercase:
	let stringEnd = str.slice(3).toUpperCase();


	return firstThreeToLowerCase + stringEnd;
}
// console.log(strModifier("cowboy"));
// console.log(strModifier("co"));


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

function sumAndReturn(n1, n2) {
	if((n1 + n2) >= 50 && (n1 + n2) <= 80) {
		return '65';
	} else {
		return '80';
	}
}
// console.log(sumAndReturn(20,40));
// console.log(sumAndReturn(50,40));







/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */







/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */

function returnAcronym(str) {
	let acronym = "";
	
	// Loop through the characters:
	for(let i = 0; i < str.length; i++) {
		// First character
		if(i === 0) {
			acronym = acronym + str[i].toUpperCase();
		}
		// Characters after empty space:
		if(str[i-1]  === " ") {
			acronym = acronym + str[i].toUpperCase();
		}
	}

	return acronym;
}

console.log(returnAcronym("Bayerische Motoren Werke"));
console.log(returnAcronym("British Broadcasting Corporation"));