"use strict";

// CODEWARS #3

const isPangram = function (str) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const emptyArr = [];
  const emptyStrArr = [];
  const lettersArr = letters.split("");
  const strArr = String(str).toLowerCase().split("");
  strArr.forEach((s) =>
    letters.includes(s) ? emptyStrArr.push(s) : console.log(".")
  );

  lettersArr.forEach((letter) =>
    emptyStrArr.includes(letter) ? emptyArr.push(true) : emptyArr.push(false)
  );

  if (emptyArr.includes(false)) {
    return false;
  } else {
    return true;
  }
};
