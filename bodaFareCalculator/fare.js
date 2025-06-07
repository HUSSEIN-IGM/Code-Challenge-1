// fare.js
// Estimates the fare for a boda boda ride based on distance traveled

function calculateBodaFare(distanceInKm) {
  const baseFare = 50;        // Base fare in KES
  const perKmCharge = 15;     // Charge per kilometer in KES

  // Calculate total fare
  const totalFare = baseFare + (distanceInKm * perKmCharge);

  // Output fare breakdown to console
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceInKm * perKmCharge}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log("Panda Pikipiki!");
}

// Prompt user and call the function
const distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(distanceInput);

if (isNaN(distanceInKm) || distanceInKm <= 0) {
  console.log("Tafadhali ingiza umbali halali (> 0) kwa kilomita.");
} else {
  calculateBodaFare(distanceInKm);
}
