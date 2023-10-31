const applyDamage = (damage, currentHP) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const newHP = currentHP - damage;
        if(newHP <= 0) {
            reject(`The player suffers ${damage} points of damage and has fallen unconscious.`);
        } else {
            resolve(`The player suffers ${damage} points of damage and has ${newHP} hit points remaining.`);
        }
    }, 1000)
  })
}

// Don't touch below this line

function runApplyDamageTest(damage, currentHP) {
  console.log(`Applying ${damage} damage to player with ${currentHP} HP...`)
  applyDamage(damage, currentHP).then((message) => {
    console.log(`...applyDamage resolved with: ${message}`)
  }).catch((message) => {
    console.log(`...applyDamage rejected with: ${message}`)
  })
}


async function main() {
    runApplyDamageTest(27, 50)
    await wait(1100);
    runApplyDamageTest(50, 50)
    await wait(1100);
    runApplyDamageTest(110, 100)
    await wait(1100);
}


async function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

main();

// setTimeout(() => {
//     fetch("https://api.boot.dev/v1/courses_rest_api/learn-http/items").then((result) => {
//     return result.json();
// }).then((data) => {
//     for(item of data) {
//         console.log(item.name);
//     }
// }).catch((error) => {
//     console.log(error);
// })
// }, 1000)

// const promise = new Promise((resolve, reject) => {
//     if(getRandomBoolean()) {
//         resolve("fulfilled");
//     } else {
//         reject("rejected");
//     }
// });

// promise.then((result) => {
//     console.log(`Promise got ${result}!`);
// }).catch((result) => {
//     console.log(`Promise got ${result}`);
// }); 

// function getRandomBoolean() {
//     return Math.random() < 0.5; 
// }