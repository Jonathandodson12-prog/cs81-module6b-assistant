function PersonalAssistant(name) {
  this.name = name;          // Sets the name of the assistant
  this.tasks = [];            // Initializes an empty array to hold tasks
  this.mood = "neutral";      // Sets the initial mood of the assistant
}

// Method to add a task
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);     // Adds a task to the tasks array
  console.log("Task added:", task);
};

// Method to complete a task
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const completedTask = this.tasks.shift();  // Removes the first task from the list
    console.log("Task completed:", completedTask);
  } else {
    console.log("No tasks to complete.");
  }
};

// Method to report the assistant's mood
PersonalAssistant.prototype.reportMood = function() {
  console.log("Mood: " + this.mood);
};

// Optional method to update mood
PersonalAssistant.prototype.changeMood = function(newMood) {
  this.mood = newMood;  // Changes the assistant's mood
  console.log("Mood changed to:", this.mood);
};

// Simulate using the assistant in a day
let myAssistant = new PersonalAssistant("Jarvis");

console.log("Hi! I'm " + myAssistant.name + ", your assistant.");
myAssistant.reportMood();

// Add tasks for the week
myAssistant.addTask("Finish JS assignment");
myAssistant.addTask("Buy groceries");
myAssistant.addTask("Schedule meeting with client");

// Report mood before completing tasks
myAssistant.reportMood();

// Complete a task
myAssistant.completeTask();
myAssistant.reportMood();

// Complete another task
myAssistant.completeTask();
myAssistant.reportMood();
