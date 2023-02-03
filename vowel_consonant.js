/** To find whether a char is vowel or consonants? */

const findVowelOrNot = () => {
  let char = "b";
  char = char.toLocaleLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    console.log("Char is a vowel");
  } else {
    console.log("Char is a consonant!");
  }
};

findVowelOrNot();
