const hours = [6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9]
const grumpyHours = []
const happyHours = []

hours.forEach(i => {
    if (i < 7) {
        grumpyHours.push(i);
    } else {
        happyHours.push(i);
    }
});

console.log(`I was grumpy on ${grumpyHours.length} days.
I was happy on ${happyHours.length} days.`);