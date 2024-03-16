import { formatCurrency } from "../../scripts/utils/money.js";

console.log("Test suite: FormatCurrency");

// Basic test cases => tests if code is working
console.log("Converts cents into dollars");
if (formatCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

// Edge test cases => test with values that are tricky
console.log("Works with zero");
if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("Rounds up to the nearest cents");
if (formatCurrency(2000.5) === "20.01") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("Rounds up to the nearest cents");
if (formatCurrency(2000.4) === "20.00") {
  console.log("passed");
} else {
  console.log("failed");
}
