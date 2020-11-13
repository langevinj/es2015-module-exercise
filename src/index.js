import { arrayOfFruits } from "./foods";
import { choice, remove } from "./helpers";

const RANDOMFRUIT = choice(arrayOfFruits);
console.log(`I'd like one ${RANDOMFRUIT}, please.`);
console.log(`Here you go: ${RANDOMFRUIT}`);
console.log(`Delicious! May I have another?`);
let remainingFruit = remove(arrayOfFruits, RANDOMFRUIT);
console.log(`I'm sorry, we're all out. We have ${remainingFruit.length} left.`);
