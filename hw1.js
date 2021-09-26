'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
      throw new TypeError();
    }
    return a + b;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (typeof year !== 'number'){
      throw new TypeError();
    }else if (year < 0){
      throw new RangeError();
    }
    return Math.ceil((year/100));
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof hexColor !== 'string'){
      throw new TypeError();
    };
    let splitHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    return splitHex ? `(${parseInt(splitHex[1], 16)}, ${parseInt(splitHex[2], 16)}, ${parseInt(splitHex[3], 16)})` : new RangeError();
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof n !== 'number'){
      throw new TypeError();
    } else if (n < 0 || !Number.isInteger(n)){
      throw new RangeError();
    }
    let acc1 = 1;
    let acc2 = 1;
    for (let i = 3; i <= n; i += 1){
      let acc3 = acc1 + acc2;
      acc1 = acc2;
      acc2 = acc3;
    }
    return acc2;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
  if (!Array.isArray(matrix) || !Array.isArray(matrix[0])){
    throw new TypeError();
  };
  const result = [];
  const matrixLength = matrix.length;
  const forMatrixItemLength = matrix[0]
  for (let i = 0; i < forMatrixItemLength.length; i += 1){
    let tempArray = []
    for (let n = 0; n < matrixLength; n += 1){
      tempArray.push(matrix[n][i]);
    }
    result.push(tempArray);
  }
  return result;
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    if (typeof n !== 'number' || typeof targetNs !== 'number'){
      throw new TypeError();
    }else if (targetNs < 2 || targetNs > 36){
      throw new RangeError();
    };
    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof phoneNumber !== 'string'){
      throw new TypeError();
    };
    if(phoneNumber.match(/^\d\-\d{3}\-\d{3}\-\d\d-\d\d$/) !== null){
      return true;
    }
    return false;
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof text !== 'string'){
      throw new TypeError();
    };
    const result = text.match(/\:\-\)|\(\-\:/g)
    if (result === null){
      return 0;
    }
    return result.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    const flatArray = field.flat();
    const arrayX = [];
    const arrayO = [];
    for(let i = 0; i < flatArray.length; i += 1){
      if(flatArray[i] === 'x'){
        arrayX.push(i);
      }else{
        arrayO.push(i)
      }
    };
    let winComb = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i of winComb){
      let winX = 0
      let winO = 0
      for(let a of i){
        if(arrayX.includes(a)){
          winX += 1
        }else if (arrayO.includes(a)){
          winO += 1
        }
      }
      if(winX === 3){
        return 'x';
      }else if (winO === 3){
        return 'o';
      }
    }
    return 'draw'; 
}

export { abProblem,
  centuryByYearProblem,
  colorsProblem,
  fibonacciProblem,
  matrixProblem,
  numberSystemProblem,
  phoneProblem,
  smilesProblem,
  ticTacToeProblem}

// module.exports = {
//     abProblem,
//     centuryByYearProblem,
//     colorsProblem,
//     fibonacciProblem,
//     matrixProblem,
//     numberSystemProblem,
//     phoneProblem,
//     smilesProblem,
//     ticTacToeProblem
// };