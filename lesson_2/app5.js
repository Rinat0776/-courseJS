"use strict";
/**
 * Функция складывает  переданные параметры
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}
/**
 * Функция вычетает  из параметра переменной "а" вычетает параметр переменной "b"
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b;
}
/**
 * Функция делит параметр переменной "а" на параметр переменной "b"
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}
/**
 * Функция умножает параметр переменной "а" на праметр переменной "b"
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}
/**
 * Функция получает два числа и осуществляет над ними математическую операцию
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может быть "+","-", "/", "*".
 * @throws{Error}Если передана не предусмотреная операция, то 
 * будет выброшена ошибка
 * @returns {number}
 */
function mahtOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return division(arg1, arg2);
        case "/":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Операция " + operation + "не предусмотрена")
    }
    
}
    console.log(mahtOperation(3, 5, "+"));
    console.log(mahtOperation(3, 5, "-"));
    console.log(mahtOperation(3, 5, "/"));
    console.log(mahtOperation(3, 5, "*"));
    console.log(mahtOperation(3, 5, "lorem"));