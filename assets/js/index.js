// Task 1
const getCalculationResult = function(num1, num2, operator) {
  // (num1 === null || num2 === null || num1 === undefined || num2 === undefined) 
  // num1 = +num1, num2 = +num2

  if(typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1 - num2)) {
    return null;
  }

  switch (operator) {
    case '+': {
      return num1 + num2
    }

    case '-': {
      return num1 - num2
    }

    case '*': {
      return num1 * num2
    }

    case '/': {
      return num1 / num2
    }

    default: {
      return 'Введіть корректний оператор'
    }
  }
}

console.log(getCalculationResult(10, 2, "-")); // 1
console.log(getCalculationResult(4, 9, "*")); // 36
console.log(getCalculationResult(3, "2", "+")); // null
console.log(getCalculationResult(3, 'test', "-")); // null

// Task 2
const getSumOfNumber = function() {
  let i = 1;
  let sumResult = 0;
  // -------------------------------------------------------------------------------------
  // while (i <= 100) {
  //   sumResult += i;
    
  //   i++;
  // }
  // -------------------------------------------------------------------------------------
  do {
    sumResult += i;

    i++
  } while (i <= 100);

  return sumResult;
}

console.log(getSumOfNumber()); // 5050

// Task 3
const getRightUserAnswer = function () {
  let answer;
  let i = 0;
  
  // -------------------------------------------------------------------------------------
  while(answer !== 6) {
    if(i >= 3) {
      return alert('Правильна відповідь - 6!')
    }
    i++;

    answer = +prompt('2 + 2 * 2 = ?');
    
    if(isNaN(answer)) {
      alert('null')
    } 
  }
  // -------------------------------------------------------------------------------------

  // do {
  //   answer = +prompt('2 + 2 * 2 = ?');

  //   if(isNaN(answer)) {
  //     alert('null')
  //   }

  // } while (answer !== 6);

  return alert('Правильно!');
}

// getRightUserAnswer();


// Bonus Task
const myOwnMathPowFunc = function(num, pow) {
  if(typeof num !== 'number' || typeof pow !== 'number' || isNaN(num - pow)) {
    return null;
  }

  let result = 1;
  let i = 1;

  while(i <= pow) {
    result *= num;

    i++;
  }

  return result;
}

console.log(myOwnMathPowFunc('', 4)); // null
console.log(myOwnMathPowFunc(2, 4)); // 16
console.log(myOwnMathPowFunc(3, 3)); // 27
