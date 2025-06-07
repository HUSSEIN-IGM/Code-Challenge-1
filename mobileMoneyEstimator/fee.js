// fee.js
// Calculates transaction fee for mobile money transfers with min and max fee caps

function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015;  // 1.5%
  let fee = amountToSend * feePercentage;

  // Enforce minimum fee of KES 10
  if (fee < 10) {
    fee = 10;
  } 
  // Enforce maximum fee of KES 70
  else if (fee > 70) {
    fee = 70;
  }

  const totalDebited = amountToSend + fee;

  // Output the fee calculation details
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}\n`);
  console.log("Send Money Securely! 📱");
}

// Prompt user and call the function
const amountInput = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(amountInput);

if (isNaN(amountToSend) || amountToSend <= 0) {
  console.log("Tafadhali ingiza kiasi sahihi cha pesa (> 0).");
} else {
  estimateTransactionFee(amountToSend);
}
