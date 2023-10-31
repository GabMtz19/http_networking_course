let cases = [4, 'ten', 10];

for(let element of cases) {
    try {
        printCharacterStats(element);
    } catch (error) {
        console.log(error.message);
    }
}

// don't touch below this line

function printCharacterStats(level) {
  if (isNaN(level)) {
    throw new Error('Parameter is not a number!')
  }
  console.log(`Your character is level ${level}!`)
}
