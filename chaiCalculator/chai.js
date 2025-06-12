// chai.js
// Calculates the ingredients needed to make a specified number of cups of Kenyan chai

function calculateChaiIngredients(numberOfCups) {
  // Standard recipe per cup
  const waterPerCup = 200;      // in ml
  const milkPerCup = 50;        // in ml
  const teaLeavesPerCup = 1;    // in tablespoons
  const sugarPerCup = 2;        // in teaspoons

  // Calculate total amounts needed for the requested cups
  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  // Print the results to the console
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
}

// Prompt user and call the function
const cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(cupsInput);

if (isNaN(numberOfCups) || numberOfCups <= 0) {
  console.log("Tafadhali ingiza nambari halali ya vikombe (> 0).");
} else {
  calculateChaiIngredients(numberOfCups);
}
