let slaying = true;
let youHit = Math.floor(Math.random() * 2);
let damageThisRound = 0;
let totalDamage = 0;

while (slaying) {
  if (youHit) {
    damageThisRound = Math.floor(Math.random() * 5 + 1);
    console.log(`You hit the dragon and did ${damageThisRound} damage!`);
    totalDamage += damageThisRound;

    if (totalDamage >= 4) {
      console.log('You did it! You slew the dragon!');
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}
