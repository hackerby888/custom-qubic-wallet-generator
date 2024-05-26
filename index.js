import { QubicHelper } from "qubic-ts-library/dist/qubicHelper.js";
import PromptSync from "prompt-sync";
const helper = new QubicHelper();
let currentID = "";
let currentSeed = "";
let count = 0;

console.log("------------- INFO -------------");
console.log("Custom Wallet ID Generator for Qubic By QubicMine.Pro [ V1.0 ]");
console.log("------------- JOB -------------");
let input = PromptSync()("Enter your words: ").toUpperCase();

console.log(
    `With the words ${input} the number of tries to generate a valid ID is: ${Math.pow(
        24,
        input.length
    )}`
);

function seedGen() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const letterSize = letters.length;
    let seed = "";
    for (let i = 0; i < 55; i++) {
        seed += letters[Math.floor(Math.random() * letterSize)];
    }
    return seed;
}

await new Promise((resolve) => {
    setTimeout(resolve, 2000);
});

console.log("------------- START -------------");
while (!currentID.startsWith(input)) {
    currentSeed = seedGen();
    const id = await helper.createIdPackage(currentSeed);
    currentID = id.publicId;
    console.log("Try : ", count++, "ID : ", currentID);
}

console.log("------------- RESULT -------------");
console.log("Seed : ", currentSeed);
console.log("ID : ", currentID);
console.log(
    "Using the seed above go to wallet.qubic.li and create your wallet. You will get the wallet ID as shown above."
);
