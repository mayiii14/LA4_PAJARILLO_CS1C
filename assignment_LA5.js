// Initialize hashed table (object) for storing customers
let Hash_table = {};

// Maximum number of customers
const MAX_CUSTOMERS = 5;

// Preload 5 default customers
let defaultCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
let currentIndex = 1; // Used to assign customer numbers (index + 1)

// Simple hash function (based on character codes)
function generateHashKey(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }
  return hash % 100; // Returns a value from 0–99
}

// Add default customers to the hash table
for (let i = 0; i < defaultCustomers.length; i++) {
  let name = defaultCustomers[i];
  Hash_table[currentIndex] = name;
  currentIndex++;
}

// Function to display current hash table
function displayHashTable() {
  console.log("Current Hashed Table:");
  for (let key in Hash_table) {
    console.log(`Number {key}: {Hash_table[key]}`);
  }
}

// Function to allow customer service representative to service a customer
function serviceCustomer() {
  let number = prompt("Enter the customer number to be serviced:");
  let num = parseInt(number);

  if (Hash_table[num]) {
    alert(`Now servicing number {num}: {Hash_table[num]}`);
    delete Hash_table[num]; // Remove the customer from the hash table
    displayHashTable();    // Show updated hash table
  } else {
    alert("Invalid number or customer already serviced.");
  }
}

// MAIN PROGRAM LOOP
while (true) {
  let action = prompt("Choose action:\n 1. Service\n 2. Exit\n Enter your choice:");

  if (action === "1") {
    serviceCustomer();
  } else if (action === "2") {
    alert("Exiting the queueing system.");
    break;
  } else {
    alert("Invalid input. Please choose 1 or 2.");
  }
}
