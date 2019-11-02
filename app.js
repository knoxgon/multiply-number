/*
    Codewars link:
    https://www.codewars.com/kata/5708f682c69b48047b000e07

    Multiply the number
*/

const multiply = (number) => {
  let pow = number.toString();
  pow.replace(/\-/, '').split('').forEach(_ => number *= 5);
  return number;
}