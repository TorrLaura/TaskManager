// TASK MANAGER

const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS - Display All Tasks"
"NEW" - Add a New Task
"REMOVE" - Remove a Task
"CLOSE" - Close the Task Manager
`;


// Storing tasks Array
const tasks = [
`Charge MacBook`,
`Master JavaScript`
];

// Used for displaying tasks to user
let showTasks = ``;

// For storing the value of a new task
let newTask;

// For storing the number of the task to remove
let num;

// For storing the value of the removed task
let removed;


// Using the toUpperCase method to convert the users response to UPPERCASE
let userInput = prompt(menu). toUpperCase();

// Loops and continues to display until the user enters close
while (userInput !== `CLOSE`) {

// Checks if user entered TASKS
if (userInput ===`TASKS`){

// 
for (task of tasks){
        
//    Using \n to tcreate a new line after each task
showTasks += `${task}\n`;
    }

// Displays current tasks to user
alert(showTasks);

// Set the value of the showTasks string variable back to an empty string
showTasks = "";
}

if (userInput === `NEW`){

newTask = prompt (`Please enter the new task:`);


// Continues looping and prompting the user until text is entered. IF user does not type anything and just clicks OK, then the value returned is an empty string.
while(newTask === ``){
    newTask = prompt(`Please enter the new task`);
}
        
        
// Alerts user task has been added  
alert (`"${newTask}") has been added!`);

// Adds new user entry at the end of the tasks array
tasks.push(newTask);
}

// checks if user entered removed
if (userInput === `REMOVE`){


    // Concatenates each task/item in the tasks array to the showTasks string variable. Also, sets/displays a number for each task.
    for(i = 0; i < tasks.length; i++){


    // Adding 1 to i (AKA the Index) so the number will start displaying at 1. Also, using \n to create a new line(AKA Line Break)
        showTasks += `${i +1}: ${tasks[i]}\n`;
    }

    // Prompts the user to enter a number and stores their response to the num variable. Also, using \n(line break) to create a new line.
    // Using a -1 to subtract a digit from the users entry so it may match the index array.
    // JavaScript will attempt to convert a string into a number when you try to subtract from it, like in ParseInt. 
    num = prompt (`Please enter a number to remove:\n${showTasks}`) -1;


    // Loop continues looping until the user enters a valid number.
    // Verifies the user entered a whole (AKA not a decimal) that is within the number range. 
    while(Math.floor(num) ! ==num || num <0 || num >= tasks.length || !num){

        alert(`Not a valid entry`);
        
        num = prompt (`Please enter a number to remove:\n${showTasks}`) -1;

    }

    // Removes the task/item selected by the user from the tasks array. Also, set the task/item that was removed to the REMOVED variable.
    removed = tasks.splice(num, 1);
    
    // Alerts user with the task/item that has been removed (NOTE: using index on the REMOVED variable here because splice returns the value that is removed as an item in an array)
    alert(`"${removed[0]}" has been removed`);

// Sets the value of the showTasks string variable back to an empty string
showTasks = ``;
}
    
// Displays the menu again
 userInput = prompt (menu).toUpperCase();
}

// Alerts the user that they have closed the program
alert (`Thank you for using Task Manager`)








