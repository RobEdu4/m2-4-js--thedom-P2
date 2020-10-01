// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
  newString = "";
  for (let i = 0; i < paragraph.length; i++) {
    if ((i + 1) % 40 === 0) {
      newString += `${paragraph[i]}\n`;
    } else if (i % 40 === 0) {
      paragraph[i] === " "
        ? (newString = newString)
        : (newString += paragraph[i]);
    } else {
      newString += paragraph[i];
    }

    //  no space removal
    //  (i + 1) % 40 === 0
    //    ? (newString += `${paragraph[i]}\n`)
    //    : (newString += paragraph[i]);
  }

  return newString;
};
console.log(
  wrapAfter40Chars(
    "ewnf3492fnewiuenwsfkjdfwjefn493fhn39efunwsifnjkwsedfewkdfn349rnferiufnikjfnwekfwsfwfweikfjnwef934nfuwnewkjfnwfwekjnfwe3453453489759345983459283qewr9dsw9fn34w298efhnuiksjewr349w8rfhewsoin34w29ofeun34w9oeuifnj34we9ofn43ewoifn3ew439hnf3e4rfun3ewifun9fo34w2nf934wf3w9fn3wf"
  )
);
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
