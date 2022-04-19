import words from "./dictionary";
import { getChars, sortArray } from "./utils";
// ababa
words.forEach((item) => {
  // ababa
  let wordArr = item.split("");
  wordArr.forEach((elem, i) => {
    let newArr = [];
    if (elem.indexOf(elem[i]) !== elem.lastIndexOf(elem[i])) {
      newArr.push({ elem: elem[i] });
    }
  });
});
// []
