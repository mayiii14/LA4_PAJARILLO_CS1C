// Initialize the customer queue with default customers
let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Display the initial queue
console.log("Initial Queue:", queue);

// Function to add a customer to the queue
function addCustomer() {
  let name = prompt("Enter your name to join the queue:");
  if (name) {
    queue.push(name);
    // Notify the user of their position in the queue
    alert(`{name}, you are number {queue.length} in the queue.`);
    console.log("Updated Queue:", queue);
  }
}

// Function to service customer
function serviceCustomer() {
  let number = parseInt(prompt("Enter the number to be serviced:"));
  let index = number - 1;

  if (index >= 0 && index < queue.length) {
    let name = queue[index];
    alert(`Now servicing number {number}: {name}`);
    queue.splice(index, 1); // Remove the customer
    console.log("Updated Queue:", queue);
  } else {
    alert("Invalid number entered.");
  }
}

// Main loop to handle user actions
while (true) {
  let action = prompt("Choose action:\n 1. add\n 2. service\n 3. exit\n Enter your choice:");
  if (action === "1") {
    addCustomer();
  } else if (action === "2") {
    serviceCustomer();
  } else if (action === "3") {
    alert("Exiting the system.");
    break;
  } else {
    alert("Invalid action. Please choose 1, 2, or 3.");
  }
}
