// Requirements:
// 1. Calculate the total cost of all products.
// 2. Find the highest and lowest product prices.
// 3. Find every pair of different products whose combined price is exactly $50.
// 4. Don't pair a product with itself.
// 5. Don't print the same pair twice.
// 6. Print the total number of matching pairs.

let prices = [15, 25, 40, 10, 30, 20];
let budget = 50;
let totalcost = 0;
let highestProduct = prices[0];
let LowestProductPrice = prices[0];
let targetTotal = 50;
let counter = 0;
for (let i = 0; i < prices.length; i++) {

  totalcost = totalcost + prices[i];
  if (highestProduct < prices[i]) {
    highestProduct = prices[i];
  }
  if (LowestProductPrice > prices[i]) {
    LowestProductPrice = prices[i];
  }
  for (let j = i + 1; j < prices.length; j++) {
    if (prices[i] + prices[j] == targetTotal) {
      counter = counter + 1;
      console.log(prices[i] + " and " + prices[j] + "=" + targetTotal);
    }
  }
}
console.log("Total:", totalcost);
console.log("Highest", highestProduct);
console.log("lowest", LowestProductPrice);
console.log(counter);

let steps = [100, 150, 180, 90, 120, 160, 200, 80];

// Requirements
// 1. Calculate the total of all step readings.
// 2. Find the highest reading.
// 3. Find the lowest reading.
// 4. Find the longest sequence of consecutive increasing readings.
// 5. Print every number in that longest sequence, in order.
// 6. Print how many readings belong to that sequence.
// 7. When a reading decreases or stays the same, the increasing sequence ends.

// Total steps: 1080
// Highest: 200
// Lowest: 80
// Longest increasing sequence: 90 120 160 200
// Sequence length: 4

let totalsteps = 0;
let highest = steps[0];
let lowes = steps[0];
let currentstreak = 1;
let beststreak = 1;
let currentindex=0

let bestEnd = 0;
for (let i = 0; i < steps.length; i++) {
    
  totalsteps = totalsteps + steps[i];
  if (highest < steps[i]) {
    highest = steps[i];
  }
  if (lowes > steps[i]) {
    lowes = steps[i];
  }
  if (steps[i] < steps[i + 1]) {
    currentstreak = currentstreak + 1;
    currentindex=i
  }
  else{
    currentstreak=1
  }
  if (currentstreak > beststreak) {
    console.log("currentindex",currentindex)
    beststreak = currentstreak;
    bestEnd = i + 1;    
  }
  
}
console.log("totalsteps:", totalsteps);
console.log("highest", highest);
console.log("lowest", lowes);
console.log(beststreak);
