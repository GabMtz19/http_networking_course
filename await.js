async function main() {
    const message = applyDamage(25, 50);

    console.log(message)
}

// Don't touch below this line

async function applyDamage(damage, currentHP) {
    const newHP = currentHP - damage;
    
    return `The player with ${currentHP} hit points suffers ${damage} points of damage and has ${newHP} hit points remaining.`;
}

main();