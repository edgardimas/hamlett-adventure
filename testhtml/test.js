let text = "";

for (i = 0; i <= 5; i++) {
  for (p = 0; p <= i; p++) {
    text = text + "*";
  }
  text += "\t";
}

console.log(text);

/**
 *      *
 *     ***
 *    *****
 */
