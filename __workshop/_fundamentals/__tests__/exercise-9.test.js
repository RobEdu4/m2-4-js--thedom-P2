// We import (require) the function that we want to test.
const wrapAfter40Chars = require("../exercise-9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(
    wrapAfter40Chars(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    )
  ).toBe(
    "Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem\nIpsum has been the industry's standard \ndummy text ever since the 1500s, when an\nunknown printer took a galley of type a\nnd scrambled it to make a type specimen \nbook."
  );

  expect(
    wrapAfter40Chars(
      "ewnf3492fnewiuenwsfkjdfwjefn493fhn39efunwsifnjkwsedfewkdfn349rnferiufnikjfnwekfwsfwfweikfjnwef934nfuwnewkjfnwfwekjnfwe3453453489759345983459283qewr9dsw9fn34w298efhnuiksjewr349w8rfhewsoin34w29ofeun34w9oeuifnj34we9ofn43ewoifn3ew439hnf3e4rfun3ewifun9fo34w2nf934wf3w9fn3wf"
    )
  ).toBe(
    "ewnf3492fnewiuenwsfkjdfwjefn493fhn39efun\nwsifnjkwsedfewkdfn349rnferiufnikjfnwekfw\nsfwfweikfjnwef934nfuwnewkjfnwfwekjnfwe34\n53453489759345983459283qewr9dsw9fn34w298\nefhnuiksjewr349w8rfhewsoin34w29ofeun34w9\noeuifnj34we9ofn43ewoifn3ew439hnf3e4rfun3\newifun9fo34w2nf934wf3w9fn3wf"
  );
  // add more tests here... ... ...  T_T creates errors when pasted with
});

// More info on jest expect: https://jestjs.io/docs/en/expect
